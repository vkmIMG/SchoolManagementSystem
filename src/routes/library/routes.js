// required Package.....
const express = require("express");
const router = express.Router();

// required Controllers.....
const { addBook, getBook, bookDetail, searchBook } = require("../../controller/library/books");
const { getStocks, insertStocks } = require("../../controller/library/stock");
const { issueBook, bookDeposit } = require("../../controller/library/transaction")


// routes ........................................
router.post("/books/addBook", addBook);
router.post("/books/getBook", getBook);
router.post("/books/bookDetail", bookDetail);
router.post("/books/searchBook", searchBook);
router.post("/stocks/getStock", getStocks);
router.post("/stocks/insertStock", insertStocks);
router.post("/transaction/issueBook", issueBook);
router.post("/transaction/bookDeposit", bookDeposit);


module.exports = router;