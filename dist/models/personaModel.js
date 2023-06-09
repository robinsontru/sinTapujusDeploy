"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persona = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
var _citasModel = require("./citasModel.js");
var _eventoModel = require("./eventoModel.js");
var _juegosModel = require("./juegosModel.js");
var _comentariosModel = require("./comentariosModel.js");
var persona = _database.sequelize.define('persona', {
  id_persona: {
    type: _sequelize.DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true

    // allowNull: false
  },

  constraseña: {
    type: _sequelize.DataTypes.STRING

    // allowNull: false
  },

  email: {
    type: _sequelize.DataTypes.STRING
    // allowNull: false
  },

  apellido: {
    type: _sequelize.DataTypes.STRING

    // allowNull: false
  },

  tipo_documento: {
    type: _sequelize.DataTypes.STRING
    // allowNull: false
  },

  N_documento: {
    type: _sequelize.DataTypes.INTEGER
    // allowNull: false
  },

  nombre: {
    type: _sequelize.DataTypes.STRING

    // allowNull: false
  },

  telefono: {
    type: _sequelize.DataTypes.INTEGER(11)
    // allowNull: false
  },

  n_ficha: {
    type: _sequelize.DataTypes.INTEGER
    // allowNull: false
  },

  rol: {
    type: _sequelize.DataTypes.ENUM('AP', 'EN', 'SP')
  }
});

//Relaciones de rol con cita
exports.persona = persona;
persona.belongsTo(_citasModel.citas, {
  foreignkey: "id_persona"
});
_citasModel.citas.hasOne(persona, {
  foreignkey: " cita_id"
});

//Relaciones de rol con juegos
persona.belongsTo(_juegosModel.juego, {
  foreignkey: "id_persona"
});
_juegosModel.juego.hasOne(persona, {
  foreignkey: "id_juego"
});

//Relaciones de rol con evento
persona.belongsTo(_eventoModel.Producto, {
  foreignkey: "id_persona"
});
_eventoModel.Producto.hasOne(persona, {
  foreignkey: "id_Evento"
});

//Relaciones de rol con comentarios
// persona.belongsTo(comentarios, {foreignkey: "id_Comentarios"});
// comentarios.hasOne(persona, {foreignkey: " id_persona"});