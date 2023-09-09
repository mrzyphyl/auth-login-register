const express  = require('express')
const router = express.Router()
const {  getUser, postUser, editPassword, loginUser } = require('../controller/login-signupController')

router.route('/').get(getUser).post(postUser)

router.route('/login').post(loginUser)

router.route('/:id').put(editPassword)

module.exports = router