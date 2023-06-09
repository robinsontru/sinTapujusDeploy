"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.psicologa = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
var psicologa = _database.sequelize.define('psicologa', {
  tarjetaProfesional: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  }
}, {
  timestamps: false
});
exports.psicologa = psicologa;