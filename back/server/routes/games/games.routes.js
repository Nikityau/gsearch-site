import express from "express";

export const gamesRouter = express.Router()

const defPath = '/games'
const currentGamePath = `${defPath}/:id`
const byGenreGamesPath = `${defPath}/genre/:genre`

gamesRouter.get(defPath, async (req, res) => {
    res.send('all games')
})
gamesRouter.get(currentGamePath, (req, res) => {
    res.send('current game')
})
gamesRouter.get(byGenreGamesPath, (req, res) => {
    res.send('by genre')
})
