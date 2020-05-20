class Role{

    constructor(id, position) {
        this._id = id;
        this._position = position;
    }


    get id() {
        return this._id;
    }

    get position() {
        return this._position;
    }


    set position(value) {
        this._position = value;
    }
}