const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
	"mongodb+srv://ariqshd:!sAKURAS0U@menariq.raw5o.mongodb.net/<dbname>?retryWrites=true&w=majority";
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

app.get("/", (req, res) => {
	res.send("Hi there");
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
