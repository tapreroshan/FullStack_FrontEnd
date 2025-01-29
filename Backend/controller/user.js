const userModel = require('../Models/user');

const createUser = async (req,res) => {
     const {username,email,password}= req.body
    try {
        // check if user already exists
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"})
        }
        const newuser = new userModel(req.body);
        const user = await newuser.save();
        res.status(201).json({ message: "User created successfully", user });
        
    } catch (error) {
        res.status(500).json({ message: error})
    }
    
}

module.exports = {createUser}