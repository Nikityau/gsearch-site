import {GameModel} from "../../db/models/game/game.model.js";
import { ModelManipulationController } from "../../db/model.controller/modelManipulation.controller.js";

export class GamesController {
    async getAllGames(req, res) {
        const allGames = await ModelManipulationController.getAll(
            GameModel,
            {
                include: GameModel._modelConfigs.include
            }
        )

        res.send(allGames)
    }
}