class Generator {
    generateId(){
        let id = ""
        for (let i = 0; i < 6; i++) {
            id +=Math.floor(Math.random()*10)
        }
        return (new DBController().checkForId(id))? id : this.generateId()
    }
}