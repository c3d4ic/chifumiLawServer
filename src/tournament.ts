import Game from "./game";
import { Player } from "./player";

export class Tournament {
  id: Number
  name: String
  players: Player[]
  game: Game[]
  admin: Player

  constructor(id: Number, name: String, players: Player[], game: Game[], admin: Player) {
    this.id = id
    this.name = name
    this.players = players
    this.game = game
    this.admin = admin
  }
}