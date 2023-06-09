// Importar el Router de Express y el controlador de comentarios
import { Router } from "express";
import { mirar_citas,crear_cita,eliminar_cita,obtener_cita_id,aprovada_cita, crear_cita1} from "../controllers/citasController.js";

// Crear un router para las rutas de comentarios
const router = Router();

//  Definir las rutas para obtener y agregar comentarios
router.post("/citas",crear_cita);
router.post("/citas1",crear_cita1);
router.put("/citas/:id",aprovada_cita);
router.delete("/citas/:id", eliminar_cita);
router.get("/citas",mirar_citas);
router.get("/citas/:id", obtener_cita_id);

//funcion para controlar los probelas que no causa el cors
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// Exportar el router
export default router;
