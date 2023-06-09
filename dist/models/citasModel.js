"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.citas = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
// import {aprendiz} from "../models/aprendizModel.js";
// import {horas} from "../models/horaCitasModel.js"

var citas = _database.sequelize.define('cita', {
  cita_id: {
    type: _sequelize.DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  aprendiz_id: {
    type: _sequelize.DataTypes.INTEGER.UNSIGNED //llave foranea de Aprendiz
    // allowNull: false
  },

  fecha: {
    type: _sequelize.DataTypes.DATE
    // allowNull: false
  },

  hora_id: {
    type: _sequelize.DataTypes.TIME //llave foranea de horas
    // allowNull: false
  },

  lugar: {
    type: _sequelize.DataTypes.STRING
    // allowNull: false
  },

  Asistencia: {
    type: _sequelize.DataTypes.STRING
  }
}, {
  //CreatedAt y UpdatedAt no aparescan.
  timestamps: false
});

//Relaciones
// citas.belongsTo(aprendiz, {foreignkey: "aprendiz_id"});
// aprendiz.hasOne(citas, {foreignkey: "aprendiz_id"});

// citas.belongsTo(horas, {foreignkey: "hora_id"});
// horas.hasMany(citas, {foreignkey: "hora_id"});
exports.citas = citas;
var _default = citas;
exports["default"] = _default;