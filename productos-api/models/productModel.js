// models/productModel.js
const db = require('../server'); // Importar la conexión a la base de datos

// Obtener todos los productos
const getAllProducts = (callback) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Crear un nuevo producto
const createProduct = (product, callback) => {
  const { nombre, precio, categoria, enStock } = product;
  db.query('INSERT INTO productos (nombre, precio, categoria, enStock) VALUES (?, ?, ?, ?)',
    [nombre, precio, categoria, enStock],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
};

module.exports = {
  getAllProducts,
  createProduct
};
