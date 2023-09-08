const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, 'Please add your First Name']
    },
    LastName: {
        type: String,
        required: [true, 'Please add your Last Name']
    },
    Age: {
        type: String,
        required: [true, 'Please add your Age']
    },
    Email: {
        type: String,
        required: [true, 'Please add your Email']
    },
    Password: {
        type: String,
        required: [true, 'Please add your Password']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)