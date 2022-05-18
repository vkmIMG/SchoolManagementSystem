//services required 
const libraryServices = require("../../db/services/library/books");

exports.addBook = async (req, res) => {
    try {
        let response = await libraryServices.addBook(req);
        if (response.status) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}
