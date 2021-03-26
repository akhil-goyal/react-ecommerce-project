const express = require('express');

const authenticationRoutes = require('./routes/auth');

require('dotenv').config();
require('./database/db');

const PORT = process.env.PORT || 7000;

const app = express();

app.use('/auth', authenticationRoutes);

app.listen(PORT, () => {
    console.log(`Server started running at PORT : ${PORT}`);
});