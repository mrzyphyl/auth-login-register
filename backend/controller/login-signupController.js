const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

//Get User Data
//@route GET /api/user
//@access Public
const getUser = asyncHandler (async (req, res) => {
    const getUser = await User.find({User})
    res.status(200).json(getUser)
})

//Login User Data
//@route GET /api/user
//@access Public
const loginUser = asyncHandler (async (req, res) => {
    let { Email, Password } = req.body

    if(!Email && !Password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exist
    const userExist = await User.findOne({Email, Password})

    if(userExist){
        const getUser = await User.find({User})
        res.status(200).json(getUser)
    } else {
        res.status(400)
        throw new Error('Wrong Credentials')
    }

})

//Create New User
//@route POST /api/user
//@access Public
const postUser = asyncHandler (async (req, res) => {
    const { FirstName, LastName, Age, Email, Password } = req.body

    if(!FirstName && !LastName){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exist
    const userExist = await User.findOne({FirstName, LastName})

    if(userExist){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        FirstName,
        LastName,
        Age,
        Email,
        Password
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            FirstName: user.FirstName,
            LastName: user.LastName,
            Age: user.Age,
            Email: user.Email,
            Password: user.Password
        })
    } else {
        res.status(400)
        throw new Error('Cant register')
    }
})

//Edit User Password
//@route PUT /api/user
//@access Public
const editPassword = asyncHandler (async (req, res) => {
    //Check if User exist
    const checkUser = await User.findById(req.params.id)

    if(!checkUser){
        res.status(400)
        throw new Error('User not found')
    }

    const editUserPassword = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(editUserPassword)
})

module.exports = {
    getUser,
    postUser,
    editPassword,
    loginUser
}