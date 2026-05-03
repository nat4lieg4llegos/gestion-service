const express = require('express');
const router = express.Router();

// Middleware de validación
const validarGestion = require('../middlewares/validation.middleware');

// Controllers
const {
    getGestion,
    crearGestion,
    actualizarGestion,
    eliminarGestion
} = require('../controllers/gestionController');

// Obtener todos los datos
router.get('/gestion', getGestion);

// Crear un nuevo dato (con validación)
router.post('/gestion', validarGestion, crearGestion);

// Actualizar un dato por id (con validación)
router.put('/gestion/:id', validarGestion, actualizarGestion);

// Eliminar un dato por id
router.delete('/gestion/:id', eliminarGestion);

module.exports = router;