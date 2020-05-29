module.exports = class Post {

    constructor(id, body, additional, userId, materials, likes) {
        this.id = id;
        this.body = body;
        this.additional = additional;
        this.userId = userId;
        this.materials = materials;
        this.likes = likes;
    }
}