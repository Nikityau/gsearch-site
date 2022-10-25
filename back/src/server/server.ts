import express from 'express'
import cors from 'cors'

import { Logger } from '../logger/logger.js'

import { gamesRouter } from './routes/games/games.routes'

import { connectDb } from '../db/db.js'

import { preGetGoodResponse } from './middlewares/preGetGoodResponse'

const PORT = 8000

const app = express()

app.use(cors())

app.get('*', preGetGoodResponse)

app.use('/api', gamesRouter)

async function startServer() {
    try {
        await connectDb()
        app.listen(PORT, 'localhost', () => Logger.serverUp(PORT))
    } catch (e: unknown ) {
        const exception = e as Error

        Logger.error(`Start error: ${exception.message}`)
    }
}

startServer()