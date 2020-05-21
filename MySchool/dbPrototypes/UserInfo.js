class User {
    constructor(id, name, date) {
        this._id = id;
        this._name = name;
        this._date = date;
    }


    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get date() {
        return this._date;
    }

    set name(value) {
        this._name = value;
    }

    set date(value) {
        this._date = value;
    }

}