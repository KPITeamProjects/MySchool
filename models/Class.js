module.exports = class Class{

    constructor(id, name, schedule, tasks) {
        this.id = id;
        this.name = name;
        this.schedule = schedule;
        this.tasks = tasks;
    }

    addTask(task){
        this.tasks+="\n\r"+task
    }
}