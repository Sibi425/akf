console.log("Works!")
const express = require('express');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');
const config = require('./config/config')

const app = express()
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json())

require('./routes')(app)

app.listen(config.port, () => {
    console.groupCollapsed("Port ", config.port)
})