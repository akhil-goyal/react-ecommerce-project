require('dotenv').config();
require('./database/db');

const express = require('express');
const cors = require('cors');
const expressValidator = require('express-validator');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const authenticationRoutes = require('./routes/auth');

// Express Application
const app = express();

// Application Middlewares
app.use(cors());
app.use(expressValidator());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// Application Routing Middlewares
app.use('/auth', authenticationRoutes);

const PORT = 7000;

app.listen(PORT, () => {
    console.log(`Server started running at PORT : ${PORT}`);
});