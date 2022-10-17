import {Sequelize} from "sequelize";

import {GameModel} from './models/game/game.model.js'
import {ImageModel} from "./models/image/image.model.js";
import {VideoModel} from "./models/video/video.model.js";
import {AchievementModel} from "./models/game/achievement/achievement.model.js";
import {DeveloperModel} from "./models/game/developer/developer.model.js";

import {Logger} from "../logger/logger.js";

export const sequelize = new Sequelize(process.env.DB_URI)

export async function connectDb() {
    try {
        await sequelize.authenticate();
        Logger.success('DB connected')

        await defineGameModels()

        await seqSync({force: true, alter: true})

        const game = await GameModel.create({
            title: 'Metro 2033',
            slug: 'metro-2033',
            description: "pizdec"
        })

        await ImageModel.create({url: "https://google.com", game_id: game.id})
        await VideoModel.create({url: 'https://youtube.com', game_id: game.id})
        await AchievementModel.create({
            title: "First Blood",
            icon: "https://image_url.png",
            aim: "Kill first enemy",
            game_id: game.id
        })

        await DeveloperModel.create({
            title: '2k',
            icon: 'https://icon.png',
            game_id: game.id,
        })


        //const devs = await DeveloperModel.getAll()
        //console.log(devs)

        const all = await GameModel.getAll()

        console.log(all)

    } catch (e) {
        Logger.error(`DB error: ${e.message}`)
    }
}

async function defineGameModels() {
    await GameModel.defineModel(sequelize)
    await ImageModel.defineModel(sequelize)
    await VideoModel.defineModel(sequelize)
    await AchievementModel.defineModel(sequelize)
    await DeveloperModel.defineModel(sequelize)

    await GameModel.modelHasMany(ImageModel._imageModel, {foreignKey: 'game_id', asWhat: 'images'})
    await GameModel.modelHasMany(VideoModel._videoModel, {foreignKey: 'game_id', asWhat: 'videos'})
    await GameModel.modelHasMany(AchievementModel._achievementModel, {foreignKey: 'game_id', asWhat: 'achievements'})

    await GameModel.belongsToMany(DeveloperModel._devModel, {
        foreignKey: 'game_id',
        asWhat: 'developers',
        through: 'games_developers'
    })

    await DeveloperModel.belongsToMany(GameModel._gameModel, {
        foreignKey: 'developer_id',
        asWhat: 'games',
        through: 'games_developers'
    })
}

export async function seqSync(setting) {
    await sequelize.sync(setting)
}