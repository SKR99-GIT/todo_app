const router = require("express").Router();
const User = require("../models/user");

//sign-in API
router.post("/sign-in", async(req, res) => {
    try {
        const { username } = req.body;
    const { email } = req.body;
    const existingUser = await User.findOne({username: username})
    const existingEmail = await User.findOne({email: email})
    if (existingUser) {
        return res.status(400).json({message: "Username already exists"})
    }else if(username.length < 4){
        return res.status(400).json({message: "Username should have atleast 4 characters"})
    }
    if (existingEmail) {
        return res.status(400).json({message: "Email already exists"})
    }

    const newUser = new User({
        username: req.body.username, 
        email: req.body.email,
        password: req.body.password
    })
    await newUser.save();
    return res.status(200).json({message: "Sign-in successfully"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Internal server error"})
    }
});
module.exports = router;