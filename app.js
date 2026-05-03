// Importa Express (framework para crear el servidor)
const express = require('express');

// Crea la aplicación
const app = express();

// Importa las rutas de gestión
// aca estamos en la raiz es pro eso que apunta a src 
const gestionRoutes = require('./src/routes/gestionRoutes');

// Importa el middleware de manejo de errores
const errorHandler = require('./src/middlewares/error.middleware');

// Permite que el backend entienda datos en formato JSON (body)
app.use(express.json());

// Ruta base para probar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Gestion Service funcionando');
});

// Define el prefijo de las rutas
// Ejemplo: http://localhost:3006/api/gestion
app.use('/api', gestionRoutes);

// Middleware de errores (SIEMPRE AL FINAL)
// Captura cualquier error que venga desde controllers o rutas
app.use(errorHandler);

// Inicia el servidor en el puerto 3006
app.listen(3006, () => {
    console.log('Servidor corriendo en puerto 3006');
});


// Este archivo hace 3 cosas importantes:

//Levanta el servidor
//Conecta rutas (/api)
//Maneja errores de forma centralizada