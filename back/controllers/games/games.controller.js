import { GameModel } from "../../db/models/game/game.model.js";

export class GamesController {
    async getAllGames(req, res) {
        const allGames = await GameModel.getAll()

        res.send(allGames)
    }
}