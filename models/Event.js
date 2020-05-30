/** Class representing an event. */
module.exports = class Event {
    /**
     * Create an event.
     * @param {number} id - The id value.
     * @param {string} info - The event info value.
     * @param {date} date - The event date value.
     * @param {string} title - The event title value.
     */
    constructor(id, info, date, title) {
        this.id = id;
        this.info = info;
        this.date = date;
        this.title = title;
    }
}