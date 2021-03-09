const express = require('express')
require('./db/mongoose')
const adduserRouter = require('./routes/adduser')
const updateuserRouter = require('./routes/updateuser')
const deleteuserRoter = require('./routes/deleteuser')
const finduserRouter = require('./routes/finduser')

var cors = require('cors')
var bodyParser = require('body-parser');
const mongoose = require("mongoose");

const { MONGOURI } = require('./db/mongoose');

const app = express()
const port = process.env.PORT || 5000


//Third-party middelware
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/server", (req, res) => {
    res.send("checking connection")
})

//connection to mongo atlash
mongoose.connect(MONGOURI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("server running")).catch((err) => console.log(err))


// router
app.use(express.json())
app.use(adduserRouter)
app.use(updateuserRouter)
app.use(deleteuserRoter)
app.use(finduserRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


