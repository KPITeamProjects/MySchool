class User {
    constructor(id, info, role, classId) {
        this._id = id;
        this._info = info;
        this._role = role;
        this._classId = classId;
    }


    get id() {
        return this._id;
    }

    get info() {
        return this._info;
    }

    get role() {
        return this._role;
    }

    get classId() {
        return this._classId;
    }


    set info(value) {
        this._info = value;
    }

    set role(value) {
        this._role = value;
    }

    set classId(value) {
        this._classId = value;
    }
}