const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", async (req, res) => {
    console.log("DONATION RECEIVED:");
    console.log(JSON.stringify(req.body, null, 2));

    res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.send("Saweria webhook alive");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
