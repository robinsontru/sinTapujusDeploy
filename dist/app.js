"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _eventosRouter = _interopRequireDefault(require("./routes/eventosRouter.js"));
var _comentariosRouter = _interopRequireDefault(require("./routes/comentariosRouter.js"));
var _personaRouter = _interopRequireDefault(require("./routes/personaRouter.js"));
var _citasRouter = _interopRequireDefault(require("./routes/citasRouter.js"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//IMPORTAMOS EXPRESS

//Importamos Morgan desde express

//Importamos Rutas de eventos

// impostamos Rutas de comentarios

// impostamos Rutas de persona

// impostamos Rutas de cita

//impor de cors

var app = (0, _express["default"])();
//Middlewares, esto para que el servidor interprete los datos en formato json
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
//aqui utilizamos  cors para conectar con vvue
app.use((0, _cors["default"])());
//ruta de eventos
app.use('/', _eventosRouter["default"]);
//ruta de persona
app.use('/', _personaRouter["default"]);
//Ruta comentarios
app.use("/api", _comentariosRouter["default"]);
//Ruta citas
app.use("/", _citasRouter["default"]);

//expor de app para poderlo utilizar en index
var _default = app;
exports["default"] = _default;