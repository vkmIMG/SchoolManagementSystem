// required Models.............................
const BookModel = require("../../models/library/Book");

const addBook = async (req) => {
    try {
        let { name, about, author, publisher, publishDate, authority, price, bookImage, authorImage, noOfPage, language, isbnNo, genre } = req.body;
        let alreadyExits = await BookModel.findOne({ isbnNo });
        if (alreadyExits && alreadyExits !== {}) {
            return {
                message: "Book Already Exists",
                status: false,
                data: alreadyExits,
            }
        }
        let bookData = BookModel({ name, about, author, publisher, publishDate, authority, price, bookImage, authorImage, noOfPage, language, isbnNo, genre });
        let data = await bookData.save();
        return {
            message: "Added Successfully",
            status: true,
            data: data,
        }
    } catch (error) {
        return {
            message: String(error),
            status: false,
            data: {},
        }
    }
};

module.exports = { addBook };