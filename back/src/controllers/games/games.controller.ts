import { Request, Response } from 'express'
import { ModelManipulationController } from "../../db/model.controller/modelManipulation.controller.js";

export class GamesController {
    async getAllGames(req: Request, res: Response) {

        res.send('allGames')
    }
}