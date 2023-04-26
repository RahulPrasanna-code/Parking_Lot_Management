const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var vehicleController = require('./controllers/vehicleController.js');
var parkingController = require('./controllers/parkingController.js');
var districtController = require('./controllers/districtController.js');
var theftController = require('./controllers/theftController.js');

var app = express();

app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000,() => console.log('server started at port : 3000'));
app.use('/vehicle',vehicleController);
app.use('/parking',parkingController);
app.use('/district',districtController);
app.use('/theft',theftController)
