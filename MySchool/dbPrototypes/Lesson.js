class Lesson {

    constructor(id, materials, info) {
        this._id = id;
        this._materials = materials;
        this._info = info;
    }

    get id() {
        return this._id;
    }

    get info() {
        return this._info;
    }

    get materials() {
        return this._materials;
    }

    set info(value) {
        this._info = value;
    }

    set materials(value) {
        this._materials = value;
    }
}