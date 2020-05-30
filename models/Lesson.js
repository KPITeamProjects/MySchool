/** Class representing a lesson. */
module.exports = class Lesson {
    /**
     * Create a class.
     * @param {number} id - The id value.
     * @param {string} materials - The class materials value.
     * @param {string} info - The class info value.
     */
    constructor(id, materials, info) {
        this.id = id;
        this.materials = materials;
        this.info = info;
    }
}