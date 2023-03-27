
export default class Participant {

    protected name: String
    protected socketId: String
    protected score: Number

    constructor(name: String, socketId: String, score: Number) {
        this.name = name
        this.socketId = socketId
        this.score = score
    }

}
