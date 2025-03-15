const express = require('express');
const router = express.Router();
const bookController = require('./control');

// define routes
router.post('/books', bookController.createBook);
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.put('/books/:id', bookController.updateBookById);
router.delete('/books/:id', bookController.deleteBookById);

module.exports = router;