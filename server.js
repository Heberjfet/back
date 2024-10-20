// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const app = express();

// Configurar body-parser (para manejar formularios y JSON)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Habilitar CORS
app.use(cors());

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'productos_db'
});

db.connect((err) => {
  if (err) {
    console.log('Error conectando a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

// Ruta de ejemplo para la vista principal
app.get('/', (req, res) => {
  res.render('index'); // Renderiza la vista "index.ejs"
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
