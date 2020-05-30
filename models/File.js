/** Class representing a file. */
module.exports = class File {
    /**
     * Create a file.
     * @param {number} id - The id value.
     */
    constructor(id) {
        this._id = id;
    }
    /**
     * Get file id.
     * @return {number} id
     */
    get id() {
        return this._id;
    }

}