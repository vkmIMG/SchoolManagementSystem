const router = require("express").Router();

const { getStocksController } = require("../../controller/library/stock");

router.post("/stocks/getBookStockDetail", getStocksController);


module.exports = router;