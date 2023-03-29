import Player from "../models/player.model"



// module.exports.getTournament = async (req: any, res: any) => {
//     const tournament = await TournamentModel.find()
    
// }


export const createPlayer = async(req: any, res: any) => {
    try {
        const { name, socketId } = req.body

        const player = await Player.create({
            name: name,
            socketId: socketId
        })

        res.status(200).json(player)

    } catch(err: any) {
        res.status(500).json({error: err.message})
    }
}

export const getPlayers = async(req: any, res: any) => {
    try {
        const players = await Player.find()

        res.status(200).json(players)

    } catch(err: any) {
        res.status(500).json({error: err.message})
    }
}

export const getPlayer = async(req: any, res: any) => {
    try {

        const userId = req.params
        const player = await Player.findById(userId)

        res.status(200).json(player)

    } catch(err: any) {
        res.status(500).json({error: err.message})
    }
}