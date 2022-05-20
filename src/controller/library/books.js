//services required 
const libraryServices = require("../../db/services/library/books");

// add book .................
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
};

// get books ........................
exports.getBook = async (req, res) => {
    try {
        let response = await libraryServices.getBook(req);
        if (response.status) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

// book detail ...................................
exports.bookDetail = async (req, res) => {
    try {
        let response = await libraryServices.bookDetail(req);
        if (response.status) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(400).json(String(error));
    }
};

//search book ..............................
exports.searchBook = async (req, res) => {
    try {
        let response = await libraryServices.searchBook(req);
        if (response.status) {
            res.status(200).json(response);
        } else {
            res.status(400).json(response);
        }
    } catch (error) {
        res.status(400).json(String(error));
    }
} 
