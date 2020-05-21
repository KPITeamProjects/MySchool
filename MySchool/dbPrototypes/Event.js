class Event {

    constructor(id, info, date, title) {
        this._id = id;
        this._info = info;
        this._date = date;
        this._title = title;
    }

    get id() {
        return this._id;
    }

    get info() {
        return this._info;
    }

    get date() {
        return this._date;
    }

    get title() {
        return this._title;
    }

    set info(value) {
        this._info = value;
    }

    set date(value) {
        this._date = value;
    }

    set title(value) {
        this._title = value;
    }
}