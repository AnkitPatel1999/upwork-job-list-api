const express = require('express')
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const jobList = require('./src/job-list')

app.use('/api',jobList)

var server_port = 8000;
app.listen(server_port, function() {
    console.log('Listening on port %d', server_port);
});