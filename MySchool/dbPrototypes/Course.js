class Course {

    constructor(id, info, userId, bookId) {
        this._id = id;
        this._info = info;
        this._userId = userId;
        this._bookId = bookId;
    }

    get id() {
        return this._id;
    }

    get info() {
        return this._info;
    }

    get userId() {
        return this._userId;
    }

    get bookId() {
        return this._bookId;
    }

    set info(value) {
        this._info = value;
    }

    set userId(value) {
        this._userId = value;
    }

    set bookId(value) {
        this._bookId = value;
    }
}