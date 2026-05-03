// Arreglo en memoria donde guardamos los datos
let proyectos = [];

// GET → obtener todos los proyectos
const getGestion = (req, res, next) => {
    try {
        res.status(200).json(proyectos);
    } catch (error) {
        next(error);
    }
};

// POST → crear proyecto (validación ahora está en middleware)
const crearGestion = (req, res, next) => {
    try {
        const nuevo = {
            id: proyectos.length + 1,
            nombre: req.body.nombre
        };

        proyectos.push(nuevo);

        res.status(201).json({
            mensaje: "Proyecto creado correctamente",
            data: nuevo
        });

    } catch (error) {
        next(error);
    }
};

// PUT → actualizar proyecto (validación ahora está en middleware)
const actualizarGestion = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        // Validación de existencia (esto sí queda aquí)
        if (!proyectos[id - 1]) {
            return res.status(404).json({
                mensaje: "Proyecto no encontrado"
            });
        }

        proyectos[id - 1] = {
            id: id,
            nombre: req.body.nombre
        };

        res.status(200).json({
            mensaje: "Proyecto actualizado correctamente"
        });

    } catch (error) {
        next(error);
    }
};

// DELETE → eliminar un proyecto por id
const eliminarGestion = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        if (!proyectos[id - 1]) {
            return res.status(404).json({ mensaje: "No encontrado" });
        }

        proyectos.splice(id - 1, 1);

        res.status(200).json({ mensaje: "Proyecto eliminado" });

    } catch (error) {
        next(error);
    }
};

// Exportar funciones
module.exports = {
    getGestion,
    crearGestion,
    actualizarGestion,
    eliminarGestion
};