const express = require("express");
const { sequelize } = require('./models');

const app = express();

app.use(3000);

sequelize.sync();