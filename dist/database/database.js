"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;
var _sequelize = require("sequelize");
var _config = require("../config/config.js");
var sequelize = new _sequelize.Sequelize(_config.URL_DB_CONNECT);
exports.sequelize = sequelize;
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}