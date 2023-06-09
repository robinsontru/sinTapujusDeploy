"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comentarios = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
var _personaModel = require("./personaModel.js");
var comentarios = _database.sequelize.define('comentarios', {
  id_Comentarios: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: _sequelize.DataTypes.STRING(50)
  },
  comentario: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true
});
// //Relaciones de rol con comentarios
exports.comentarios = comentarios;
comentarios.belongsTo(_personaModel.persona, {
  foreignkey: "id_Comentarios"
});
_personaModel.persona.hasOne(comentarios, {
  foreignkey: " id_persona"
});