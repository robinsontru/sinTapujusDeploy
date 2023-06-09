"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _comentariosController = require("../controllers/comentariosController.js");
// Importar el Router de Express y el controlador de comentarios

// Crear un router para las rutas de comentarios
var router = (0, _express.Router)();

// Definir las rutas para obtener y agregar comentarios
router.post("/comentario", _comentariosController.crearComentarios);
router["delete"]("/comentario/:id", _comentariosController.eliminarComentario);
router.get("/comentario", _comentariosController.obtenerComentarios);
router.get("/comentario/:id", _comentariosController.obtenerComentario);

//funcion para controlar los probelas que no causa el cors
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Exportar el router
var _default = router;
exports["default"] = _default;