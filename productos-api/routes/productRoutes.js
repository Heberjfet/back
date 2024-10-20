// routes/productRoutes.js
const express = require('express');
const { getAllProducts, createProduct } = require('../models/productModel');
const router = express.Router();

// Obtener todos los productos
router.get('/products', (req, res) => {
  getAllProducts((err, products) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.render('products', { products }); // Renderiza la vista "products.ejs" con los datos
    }
  });
});

// Crear un nuevo producto
router.post('/products', (req, res) => {
  createProduct(req.body, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.redirect('/products'); // Redirige a la página de productos
    }
  });
});

module.exports = router;
