"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _eventosController = require("../controllers/eventosController.js");
var _url = require("url");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//impost de multer para subir img

//impost de path para subir img

//Importa el controlador aprendizController

var router = (0, _express.Router)();
//esta funcion nos ayuda ala creacionde una nueva carpeta y para poder guardar la img

var filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(filename);
var storage = (0, _multer["default"])({
  dest: './src/public'
});
var upload = (0, _multer["default"])({
  storage: storage
});

//rutas de eventos
router.get('/imagenes', _eventosController.verimg);
router["delete"]('/evento/:id', _eventosController.deleteimg);
router.post('/imagen', storage.single('imagen'), _eventosController.crearImagen);
router.get('/evento/:id', _eventosController.idimg);

//funcion para controlar los probelas que no causa el cors
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
var _default = router;
exports["default"] = _default;