class Info {

    constructor(firstName, secondName, data, id) {
        this._firstName = firstName;
        this._secondName = secondName;
        this._data = data;
        this._id = id;
    }

    get firstName() {
        return this._firstName;
    }

    get secondName() {
        return this._secondName;
    }

    get data() {
        return this._data;
    }

    get id() {
        return this._id;
    }


    set firstName(value) {
        this._firstName = value;
    }

    set secondName(value) {
        this._secondName = value;
    }

    set data(value) {
        this._data = value;
    }
}