const mongoose = require("mongoose");
const {Schema} = mongoose

const userschema = new Schema({
    googleId : String
})



module.exports = mongoose.model('users',userschema)