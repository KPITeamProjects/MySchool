class Library {

    constructor(id, info, bookId) {
        this._id = id;
        this._info = info;
        this._bookId = bookId;
    }

    get id() {
        return this._id;
    }

    get info() {
        return this._info;
    }

    get bookId() {
        return this._bookId;
    }

    set info(value) {
        this._info = value;
    }

}