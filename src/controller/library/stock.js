const { getStocks, insertStocks } = require("../../db/services/library/stocks");

// get Stock details
exports.getStocks = async (req, res) => {
  try {
    const data = await getStocks(req);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
};

// inser Stock details
exports.insertStocks = async (req, res) => {
  try {
    const data = await insertStocks(req);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
};
