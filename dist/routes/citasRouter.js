"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _citasController = require("../controllers/citasController.js");
// Importar el Router de Express y el controlador de comentarios

// Crear un router para las rutas de comentarios
var router = (0, _express.Router)();

//  Definir las rutas para obtener y agregar comentarios
router.post("/citas", _citasController.crear_cita);
router.post("/citas1", _citasController.crear_cita1);
router.put("/citas/:id", _citasController.aprovada_cita);
router["delete"]("/citas/:id", _citasController.eliminar_cita);
router.get("/citas", _citasController.mirar_citas);
router.get("/citas/:id", _citasController.obtener_cita_id);

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