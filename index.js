const express = require("express");
const app = express();

app.use(express.json());

let latestDonation = null;

app.post("/webhook", async (req, res) => {
    console.log("DONATION RECEIVED:");
    console.log(JSON.stringify(req.body, null, 2));

   latestDonation = { id: Date.now().toString(),
                     name: req.body.donator_name || "Unknown",
                     amount: req.body.amount_raw || 0,
                     message: req.body.message || "", 
                     timestamp: Date.now()
                    };

    res.sendStatus(200);
});

app.get("/latest", (req, res) => {
    res.json(latestDonation || {});
});

app.get("/", (req, res) => {
    res.send("Saweria webhook alive");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
