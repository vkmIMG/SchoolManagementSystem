// required Package.....
const express = require("express");
const router = express.Router();

// required Modoels.....
const { addBook } = require("../../controller/library/library");

// routes ........................................
router.post('/books/addBook', addBook);


module.exports = router;