// required Package.....
const express = require("express");
const router = express.Router();

// required Controllers.....
const { addBook } = require("../../controller/library/books");
const { getStocks } = require("../../controller/library/stock");

// routes ........................................
router.post('/books/addBook', addBook);
router.post("/stocks/getBookStockDetail", getStocks);

module.exports = router;