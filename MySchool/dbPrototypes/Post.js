class Post {

    constructor(id, body, additional, userId, materials, likes) {
        this._id = id;
        this._body = body;
        this._additional = additional;
        this._userId = userId;
        this._materials = materials;
        this._likes = likes;
    }

    get id() {
        return this._id;
    }

    get body() {
        return this._body;
    }

    get additional() {
        return this._additional;
    }

    get userId() {
        return this._userId;
    }

    get materials() {
        return this._materials;
    }

    get likes() {
        return this._likes;
    }

    set body(value) {
        this._body = value;
    }

    set additional(value) {
        this._additional = value;
    }

    set userId(value) {
        this._userId = value;
    }

    set materials(value) {
        this._materials = value;
    }

    set likes(value) {
        this._likes = value;
    }
}