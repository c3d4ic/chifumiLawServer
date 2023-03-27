import Participant from "./Participant"

export default class Game {

    protected participant1: Participant
    protected participant2: Participant
    protected round: Number

    constructor(participant1: Participant, participant2: Participant, round: Number) {
        this.participant1 = participant1
        this.participant2 = participant2
        this.round = round
    }
}
