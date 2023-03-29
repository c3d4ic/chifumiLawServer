import { Player } from "./player"

export default class Game {

    protected Player1: Player
    protected Player2: Player
    protected round: Number

    constructor(Player1: Player, Player2: Player, round: Number) {
        this.Player1 = Player1
        this.Player2 = Player2
        this.round = round
    }
}
