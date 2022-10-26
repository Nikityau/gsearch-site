import {Sequelize} from "sequelize";

import {ModelInstanceController} from "./model.controller/modelInstance.controller.js";
import {ModelManipulationController} from './model.controller/modelManipulation.controller.js'

import {Logger} from "../logger/logger.js";

import { modelsSetUpObj, PushModels } from './modelsSetUpObj.js'

PushModels()

console.log(modelsSetUpObj)

/*import {GameModel} from "./models/game/game.model.js";
import {ImageModel} from "./models/image/image.model.js";
import {VideoModel} from "./models/video/video.model.js";
import {Game_seriesModel} from "./models/game/game_series/game_series.model.js";
import {RequirementsModel} from "./models/game/requirements/requirements.model.ts";
import {System_requirementsModel} from "./models/game/system_requirements/system_requirements.model.ts";*/

export const sequelize = new Sequelize('postgres://postgres:1@localhost:5433/gsearch')

//const dbModelInstanceController = new ModelInstanceController(modelsSetUpObj)

export async function connectDb() {
    try {
        await sequelize.authenticate();
        Logger.success('DB connected')

        //await defineGameModels()

        //await seqSync({force: true, alter: true})

        await createTestGame()
    } catch (e) {
        Logger.error(`DB error: ${(e as Error).message}`)

        throw new Error('stop server')
    }
}

async function defineGameModels() {

    //await dbModelInstanceController.setUp(sequelize)

}

export async function seqSync(setting: any) {
    await sequelize.sync(setting)
}

async function createTestGame() {
    /*const game = await ModelManipulationController.create(GameModel, {
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

    /!* const gameSeries = await ModelManipulationController.create(Game_seriesModel, {
         game_series: 'Metro',
         game_id: game.id
     })*!/

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


    console.log(JSON.stringify(allGames, null, 2))*/
    //console.log(JSON.stringify(allGames, null, 2))
}