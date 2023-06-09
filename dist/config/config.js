"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL_DB_CONNECT = exports.PORT = void 0;
var _dotenv = require("dotenv");
// importar el paquete instalado

(0, _dotenv.config)();
var PORT = process.env.PORT;
exports.PORT = PORT;
var URL_DB_CONNECT = process.env.URL_DB_CONNECT;
exports.URL_DB_CONNECT = URL_DB_CONNECT;