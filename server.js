
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración básica
app.use(cors());
app.use(express.json());

// Mostrar la página HTML
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para comprobar la conexión
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        project: 'SonicLab',
        version: '1.0'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log('-----------------------------');
    console.log(' SONICLAB API INICIADA');
    console.log(` Servidor: http://localhost:${PORT}`);
    console.log(` Estado: http://localhost:${PORT}/api/status`);
    console.log('-----------------------------');
});
