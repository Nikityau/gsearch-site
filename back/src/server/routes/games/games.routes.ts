import express, {Response, Request} from "express";

import { GamesController } from "../../../controllers/games/games.controller.js"

export const gamesRouter = express.Router()

const gController = new GamesController()

const defPath = '/games'
const currentGamePath = `${defPath}/:id`
const byGenreGamesPath = `${defPath}/genre/:genre`

gamesRouter.get(defPath, gController.getAllGames)
gamesRouter.get(currentGamePath, (req: Request, res:Response) => {
    res.send('current game')
})
gamesRouter.get(byGenreGamesPath, (req: Request, res:Response) => {
    res.send('by genre')
})
