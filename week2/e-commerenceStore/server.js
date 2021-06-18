const express = require("express")

const morgan = require('morgan')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()

app.use(express.json()) 


app.use(morgan('dev')) 

//Connect to database
mongoose.connect('mongodb://localhost:27017/storedb', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
    }, 
    () => console.log("Connected to the database")
);

// Routes
app.use("/items", require("./routes/storeRouter.js"))

// Error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})


// Server Listen //
app.listen(9000, () => {
  console.log("The server is Live on Port 9000")
})
