import Game from "./game"
import Participant from "./Participant"

export default class Tournament {

    protected id: Number
    protected participants: Participant[]
    protected game: Game[]
    protected admin: Participant

    constructor(id: Number, participants: Participant[], game: Game[], admin: Participant) {
        this.id = id
        this.participants = participants
        this.game = game
        this.admin = admin
    }
}
