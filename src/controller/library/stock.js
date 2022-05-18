const { getStocks } = require("../../db/services/library/stocks")

// get Stock details
exports.getStocksController = async (req, res) => {
    try {
        const data = await getStocks(req)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({ error: error.toString() })
    }
}
