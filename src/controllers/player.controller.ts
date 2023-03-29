import Player from "../models/player.model"
const PlayerModel = require('../models/player.model')



// module.exports.getTournament = async (req: any, res: any) => {
//     const tournament = await TournamentModel.find()
    
// }


export const createPlayer = async(req: any, res: any) => {
    try {
        
        const player = await Player.create({
            name: "toto",
            socketId: "socketID"
        })

        res.status(200).json(player)

    } catch(err: any) {
        res.status(500).json({error: err.message})
    }
}