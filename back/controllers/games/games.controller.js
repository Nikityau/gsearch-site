import {GameModel} from "../../db/models/game/game.model.js";
import {ModelController} from "../../db/model.controller/model.controller.js";

export class GamesController {
    async getAllGames(req, res) {
        const allGames = await ModelController.getAll(
            GameModel,
            {
                include: GameModel._modelConfigs.include
            }
        )

        res.send(allGames)
    }
}