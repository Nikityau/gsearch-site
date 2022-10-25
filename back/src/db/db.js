import {Sequelize} from "sequelize";

import {ModelController} from "./model.controller/model.controller.js";
import {ModelManipulationController} from './model.controller/modelManipulation.controller.js'

import {Logger} from "../logger/logger.js";

import {modelsSetUpObj} from './modelsSetUpObj.js'
import {GameModel} from "./models/game/game.model.js";
import {ImageModel} from "./models/image/image.model.js";
import {VideoModel} from "./models/video/video.model.js";
import {Game_seriesModel} from "./models/game/game_series/game_series.model.js";
import {RequirementsModel} from "./models/game/requirements/requirements.model.js";
import {System_requirementsModel} from "./models/game/system_requirements/system_requirements.model.js";

export const sequelize = new Sequelize(process.env.DB_URI)

const dbModelController = new ModelController(modelsSetUpObj)

export async function connectDb() {
    try {
        await sequelize.authenticate();
        Logger.success('DB connected')

        await defineGameModels()

        await seqSync({force: true, alter: true})

        await createTestGame()
    } catch (e) {
        Logger.error(`DB error: ${e.message}`)

        throw new Error('stop server')
    }
}

async function defineGameModels() {

    await dbModelController.setUp(sequelize)

}

export async function seqSync(setting) {
    await sequelize.sync(setting)
}

async function createTestGame() {
    const game = await ModelManipulationController.create(GameModel, {
        slug: 'metro-2033-33',
        title: 'Metro 2033',
        description: 'Pizdec',
    })

    await ModelManipulationController.create(ImageModel, {
        game_id: game.id,
        url: 'image url'
    })

    await ModelManipulationController.create(VideoModel, {
        game_id: game.id,
        url: 'video url'
    })

    /* const gameSeries = await ModelManipulationController.create(Game_seriesModel, {
         game_series: 'Metro',
         game_id: game.id
     })*/

    const req1 = await ModelManipulationController.create(RequirementsModel, {
        oc: 'Win 10',
        processor: 'i5',
        gpu: '1070ti',
        ram: '16gb',
        network: 'full',
    })

    const sys = await ModelManipulationController.create(System_requirementsModel, {
        system_requirements_id: req1.id,
        minimal: req1.id,
        game_id: game.id
    })

    await ModelManipulationController.getAll(System_requirementsModel)

    const allGames = await ModelManipulationController.getAll(GameModel, GameModel._modelConfigs.include)


    console.log(JSON.stringify(allGames, null, 2))
    //console.log(JSON.stringify(allGames, null, 2))
}