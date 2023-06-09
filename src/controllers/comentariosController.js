// Importar el modelo de Sequelize y la instancia de Sequelize
import { Error } from "sequelize";
import { comentarios } from "../models/comentariosModel.js";

// Definir los métodos del controlador

// Controlador para obtener todos los comentarios
export async function obtenerComentarios(req, res) {
  try {
    // Obtener todos los comentarios de la base de datos
    const comment = await comentarios.findAll(
      {
        atributes: ["id_Comentarios", "comentario"]
      });
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message:error.message });
  }
}

//controlador para obtener comentarios por id
export async function obtenerComentario(req, res) {
  const { id_Comentarios } = req.params;
  try {
    const comment = await comentarios.findOne(
      {
        where: {
          id_Comentarios,
        }
      }
    );
    res.json(comment);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener el comentario" });
  }
}

// Método para crear un comentario
export async function crearComentarios(req, res) {
  const { comentario,nombre } = req.body;
  if (!comentario){
    return res.status(400).json({ message:Error.message})
  }
  try {
  
    let comment = await comentarios.create({ comentario,nombre },
       {
        fields:  ["comentario","nombre"]
    }
    );
    // return res.status(200).json({ message: 'Comentario creado correctamente' })
    res.json(comment)
  } catch (error) {
    // if (!comentario){
    //   return res.status(400).json({ message:Error.message})
    // }
    console.error(error);
    res.status(500).json({ message: error.message, });

  }
}

// Controlador para eliminar un comentario forma 1
export async function eliminarComentario(req, res) {
  const { id } = req.params;
  try {
    await comentarios.destroy({
      where: {
       id_Comentarios : id,
      },
    });
    return res.status(200).json({ message: 'Comentario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}


