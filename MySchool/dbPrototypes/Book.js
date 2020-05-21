class Book {

    constructor(id, author, description) {
        this._id = id;
        this._author = author;
        this._description = description;
    }

    get id() {
        return this._id;
    }

    get author() {
        return this._author;
    }

    get description() {
        return this._description;
    }

    set author(value) {
        this._author = value;
    }

    set description(value) {
        this._description = value;
    }
}