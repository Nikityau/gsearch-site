import express from 'express'
import cors from 'cors'

import { Logger } from '../logger/logger.js'

import { gamesRouter } from './routes/games/games.routes.js'

import { connectDb } from '../db/db.js'

import { preGetGoodResponse } from './middlewares/preGetGoodResponse.js'

const PORT = 8000

const app = express()

app.use(cors())

app.get('*', preGetGoodResponse)

app.use('/api', gamesRouter)

async function startServer() {
    try {
        await connectDb()
        app.listen(PORT, 'localhost', () => Logger.serverUp(PORT))
    } catch (e) {
        Logger.error(`Start error: ${e.message}`)
    }
}

startServer()