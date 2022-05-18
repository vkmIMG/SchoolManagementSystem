// required Package.....
const express = require("express");
const router = express.Router();

// required Controllers.....
const { addBook } = require("../../controller/library/library");
const { getStocksController } = require("../../controller/library/stock");

// routes ........................................
router.post('/books/addBook', addBook);
router.post("/stocks/getBookStockDetail", getStocksController);

module.exports = router;