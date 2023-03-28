import { Socket } from "socket.io"

export class Player {

  private name: String
  private socket: Socket
  private score: Number

  constructor(name: String, socket: Socket, score: Number) {
    this.name = name
    this.socket = socket
    this.score = score
  }
}