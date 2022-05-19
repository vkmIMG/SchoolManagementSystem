// required Package.....
const express = require("express");
const router = express.Router();

// required Controllers.....
const { addBook, getBook } = require("../../controller/library/books");
const { getStocks, insertStocks } = require("../../controller/library/stock");
// routes ........................................
router.post("/books/addBook", addBook);
router.post("/books/getBook", getBook );
router.post("/stocks/getStock", getStocks);
router.post("/stocks/insertStock", insertStocks);

module.exports = router;
