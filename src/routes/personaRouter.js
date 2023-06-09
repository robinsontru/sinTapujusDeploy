// Importar el Router de Express y el controlador de comentarios
import { Router } from "express";
import {  obtenerpersona,crearpersona, eliminarpersona,obtenerpersona_id } from "../controllers/personaController.js";

// Crear un router para las rutas de comentarios
const router = Router();

// Definir las rutas para obtener y agregar comentarios
router.post("/persona", crearpersona);
router.delete("/persona/:id", eliminarpersona);
router.get("/persona", obtenerpersona);
router.get("/persona/:id", obtenerpersona_id);

//funcion para controlar los probelas que no causa el cors
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
// Exportar el router
export default router;
