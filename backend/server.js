const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/api/user', require('./routes/login-signupRoutes'))

app.use (errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))