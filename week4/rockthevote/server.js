const express = require('express');
const app = express()

const morgan = require('morgan');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
require('dotenv').config()

// MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) 
app.use('/api/user', require('./routes/userRouter.js'))
app.use('/api/issue', require('./routes/issueRouter'))
app.use('/api/comment', require('./routes/commentRouter.js'))

// MONGODB & MONGOOSE
mongoose.connect('mongodb://localhost:27017/rockthevotedb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)

// ERROR HANDLING
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "Unauthorized Error"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// SERVER PORT
app.listen(3000, () => {
    console.log('Server is running on Port 3000')
})
