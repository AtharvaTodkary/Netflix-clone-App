var express = require("express");
var router = express.Router();
var DataModel = require("./mongo");

router.post('/', async(req, res, next)=>{
    const { email, password } = req.body;

    try {
        // Check if the email exists in the collection
        const user = await DataModel.findOne({ email: email });
        if (!user) {
            return res.json("notexist"); // Email does not exist
        }
        
        // Check if the password matches
        if (user.password !== password) {
            return res.json("incorrectpassword"); // Incorrect password
        }

        res.json("exist"); // Email and password match
    } catch(error) {
        console.error("Error checking data:", error);
        res.status(500).json("error"); // Send "error" if there's an error
    }
});

module.exports = router;
