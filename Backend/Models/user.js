const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
// creating user schema for admin and normal user

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
   
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
}, { timestamps: true });
   

//hashing user password

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;