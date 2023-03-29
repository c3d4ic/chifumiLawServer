const TournamentModel = require('../models/tournament.model')




module.exports.getTournament = async (req: any, res: any) => {
    const tournament = await TournamentModel.find()
    
}


module.exports.setTournament = async (req: any, res: any) => {
    const tournament = await TournamentModel.create({
        name: "toto"
    })
    console.log("TOURNAMENT : ", tournament)
}