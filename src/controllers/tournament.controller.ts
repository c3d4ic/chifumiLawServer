import Player from "../models/player.model"

const TournamentModel = require('../models/tournament.model')



// module.exports.getTournament = async (req: any, res: any) => {
//     const tournament = await TournamentModel.find()
    
// }


export const setTournament = async(req: any, res: any) => {
    try {
        const playerId = req.body
        const player = await Player.findById(playerId)

        const tournament = await TournamentModel.create({
            name: "toto",
            players: player
        })

        console.log("TOURNAMENT : ", tournament)

        res.status(200).json(tournament)

    } catch(err: any) {
        res.status(500).json({error: err.message})
    }
}