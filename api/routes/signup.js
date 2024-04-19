var express = require("express");
var router = express.Router();
var DataModel = require("./mongo");

router.post('/', async(req, res, next)=>{
    const { email, password } = req.body; // Extract email and password from request body
    const newData = new DataModel({
        email: email,
        password: password
    });

    try {
        const savedData = await newData.save(); // Save data to MongoDB
        console.log("Data Saved: ", savedData);
        res.status(201).json({ message: "Data saved successfully" }); // Respond with success message
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Failed to save data" }); // Respond with error message
    }
});

module.exports = router;