import Player from "../models/player.model"
import Tournament from "../models/tournament.model"

export const getTournament = async (req: any, res: any) => {
    try {
        const tournaments = await Tournament.find()

        res.status(200).json(tournaments)

    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
}

export const setTournament = async (req: any, res: any) => {
    try {
        const { name, playerId } = req.body

        const player = await Player.findById(playerId)

        const tournament = await Tournament.create({
            name: name,
            players: [player],
            admin: player
        })

        res.status(200).json(tournament)

    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
}

export const addPlayerInTournament = async (req: any, res: any) => {
    try {
        const { playerId, tournamentId } = req.body
        const player = await Player.findById(playerId)

        const tournament = await Tournament.updateOne(
            { _id : tournamentId },
            { $push : { players : player } },

        )

        res.status(200).json(tournament)

    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
}