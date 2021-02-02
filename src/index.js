require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const Track = require("./models/Track");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
	"mongodb+srv://ariqshd:!sAKURAS0U@menariq.raw5o.mongodb.net/liveTracking?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
	console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
	console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
	res.send(`Your email: ${req.user.email}`);
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
