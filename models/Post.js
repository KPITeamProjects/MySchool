/** Class representing a post. */
module.exports = class Post {
    /**
     * Create a post.
     * @param {number} id - The id value.
     * @param {string} body - The body text value.
     * @param {string} additional - The additional text value.
     * @param {number} userId - The userId value.
     * @param {string} materials - The materials value.
     * @param {number} likes - The likes for a post value.
     */
    constructor(id, body, additional, userId, materials, likes) {
        this.id = id;
        this.body = body;
        this.additional = additional;
        this.userId = userId;
        this.materials = materials;
        this.likes = likes;
    }
}