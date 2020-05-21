class School {

    constructor(id, info, name, eventId, libraryId, userId) {
        this._id = id;
        this._info = info;
        this._name = name;
        this._eventId = eventId;
        this._libraryId = libraryId;
        this._userId = userId;
    }

    get id() {
        return this._id;
    }

    get info() {
        return this._info;
    }

    get name() {
        return this._name;
    }

    get eventId() {
        return this._eventId;
    }

    get libraryId() {
        return this._libraryId;
    }

    get userId() {
        return this._userId;
    }

    set info(value) {
        this._info = value;
    }

    set name(value) {
        this._name = value;
    }

    set eventId(value) {
        this._eventId = value;
    }

    set libraryId(value) {
        this._libraryId = value;
    }
}