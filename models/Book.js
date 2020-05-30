/** Class representing a book. */
module.exports = class Book {
    /**
     * Create a point.
     * @param {number} id - The id value.
     * @param {string} author - The author name value.
     * @param {string} description - The book description value.
     */
    constructor(id, author, description) {
        this.id = id;
        this.author = author;
        this.description = description;
    }
}

