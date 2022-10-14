import {Sequelize} from "sequelize";

import {GameModel} from './models/game/game.model.js'

import {Logger} from "../logger/logger.js";

export const sequelize = new Sequelize(process.env.DB_URI)

export async function connectDb() {
    try {
        await sequelize.authenticate();
        Logger.success('DB connected')

        await GameModel.defineGameModel(sequelize)

        //await seqSync({ force: false })
    } catch (e) {
        Logger.error(`DB error: ${e.message}`)
    }
}

export async function seqSync({ params }) {
    await sequelize.sync({ ...params })
}