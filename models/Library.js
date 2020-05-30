/** Class representing a library. */
module.exports = class Library {
    /**
     * Create a class.
     * @param {number} id - The id value.
     * @param {string} info - The library info value.
     * @param {number} bookId - The bookId value.
     */
    constructor(id, info, bookId) {
        this.id = id;
        this.info = info;
        this.bookId = bookId;
    }
}