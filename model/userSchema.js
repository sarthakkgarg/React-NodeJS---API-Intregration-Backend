const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        Username : { type: String, required: false, unique:false },
        Email : { type: String, required: false, unique:false },
        Phone : { type: Number, required: false, unique:false },
        Password : { type: String, required: false, unique:false },
        ConfirmPassword : { type: String, required: false, unique:false },
    },
    { collection : 'user'}
)

const model = mongoose.model('userSchema', userSchema)
module.exports = model