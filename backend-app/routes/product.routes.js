const express = require('express');
const ProductController = require('../controllers/product.controller');
const router = express.Router();

module.exports = router;

router.get('/', function (req, res, next) {
  res.status(200).send('Mercadolibre API, Node-Express');
});

/**
 * Route : /api/items?q=query
 */

router.get('/items', (req, res) => {
  const search = req.query.q;

  if (!!search) {
    ProductController.getProducts(search, res);
  } else {
    res.status(400).send({ error: "Ingresa una busqueda : 'search' " });
  }
});

/**
 * Route '/api/items/:id'
 */
router.get('/items/:id', (req, res) => {
  const productId = req.params.id;
  if (!!productId) {
    ProductController.getProductDetails(productId, res);
  } else {
    res.status(400).send({ error: 'Ingresa un id' });
  }
});
