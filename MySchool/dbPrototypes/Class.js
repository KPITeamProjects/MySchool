class Class{

    constructor(id, name, schedule, tasks) {
        this._id = id;
        this._name = name;
        this._schedule = schedule;
        this._tasks = tasks;
    }

    addTask(task){
        this._tasks+="\n\r"+task
    }


    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get schedule() {
        return this._schedule;
    }

    get tasks() {
        return this._tasks;
    }

    set name(value) {
        this._name = value;
    }

    set schedule(value) {
        this._schedule = value;
    }

    set tasks(value) {
        this._tasks = value;
    }
}