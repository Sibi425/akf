console.log("Works!")
const express = require('express');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express()
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json())

app.post('/register', (req, res) => (
    res.send({
    "msg":`lol you are ${req.body.email}`
    })
))

app.listen(process.env.PORT || 8081, () => {
    console.groupCollapsed("Port 8081")
})