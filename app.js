const express = require("express");
const { sequelize } = require('./models');

const app = express();

sequelize.sync();