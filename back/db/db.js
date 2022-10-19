import {Sequelize} from "sequelize";

import {ModelController} from "./model.controller/model.controller.js";

import {Logger} from "../logger/logger.js";

import {modelsSetUpObj} from './modelsSetUpObj.js'

export const sequelize = new Sequelize(process.env.DB_URI)

const dbModelController = new ModelController(modelsSetUpObj)

export async function connectDb() {
    try {
        await sequelize.authenticate();
        Logger.success('DB connected')

        await defineGameModels()

        await seqSync({force: true, alter: true})

    } catch (e) {
        Logger.error(`DB error: ${e.message}`)
    }
}

async function defineGameModels() {
    try {
        await dbModelController.setUp(sequelize)
    } catch (e) {
        console.log('die define')
    }
}

export async function seqSync(setting) {
    await sequelize.sync(setting)
}