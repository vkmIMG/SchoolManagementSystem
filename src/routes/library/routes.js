// required Package.....
const express = require("express");
const router = express.Router();

// required Controllers.....
const { addBook, getBook } = require("../../controller/library/books");
const { getStocks } = require("../../controller/library/stock");

// routes ........................................
router.post("/books/addBook", addBook);
router.post("/books/getBook", getBook );
router.post("/stocks/getStock", getStocks);

module.exports = router;