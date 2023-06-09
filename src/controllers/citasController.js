// Importar el modelo de Sequelize y la instancia de Sequelize
import {citas  } from "../models/citasModel.js";

// Definir los métodos del controlador

// Controlador para obtener todos las personas
export async function mirar_citas(req, res) {
  try {
    // Obtener todos los comentarios de la base de datos
    const people = await citas.findAll(
    //   {
    //     atributes: ["id_Comentarios", "comentario"]
    //   });
    )
    res.json(people);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message:error.message });
  }
}

//controlador para obtener persona por NOMBRE
export async function obtener_cita_id(req, res) {
  const { id } = req.params;
  try {
    const comment = await citas.findOne(
      {
        where: {
            cita_id :id
        }
      }
    );
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message, });
  }
}

// Método para crear un persona
export async function crear_cita(req, res) {
    
  const {fecha,hora_id,lugar} = req.body;

  try {
    let city = await citas.create({fecha,hora_id,lugar},

    );

    res.json(city)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, });
  }
}
// // Controlador para eliminar un persona por id
export async function eliminar_cita(req, res) {
  const { id } = req.params;
  try {
    await citas.destroy({
      where: {
        cita_id : id,
      },
    });
    return res.status(200).json({ message: 'Cita elimininada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

export async function aprovada_cita(req,res){
    // try {
        
    // } catch (error) {
        
    // }
    const cita_id = req.params.id;

  // Buscar la cita por su id
  const cita = citas.find(cita => cita.id === cita_id);

  if (cita) {
    cita.aprobada = true;
    res.json(cita);
  } else {
    res.status(404).json({ error: 'Cita no encontrada' });
  }
}


export async function crear_cita1(req, res) {
    const { fecha, hora_id, lugar } = req.body;
    try {
      const numeroCitas = await citas.count();
      const limiteCitas = 10; 
      if (numeroCitas >= limiteCitas) {
        return res.status(400).json({ message: 'Se ha alcanzado el límite de citas permitidas' });
      }
      let newCita = await citas.create({ fecha, hora_id, lugar });
      res.json(newCita);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }