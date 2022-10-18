import {Sequelize} from "sequelize";

import {GameModel} from './models/game/game.model.js'
import {ImageModel} from "./models/image/image.model.js";
import {VideoModel} from "./models/video/video.model.js";
import {AchievementModel} from "./models/game/achievement/achievement.model.js";
import {DeveloperModel} from "./models/game/developer/developer.model.js";
import {PublisherModel} from "./models/game/publisher/publisher.model.js";
import {FactModel} from "./models/game/fact/fact.model.js";
import {GenreModel} from "./models/game/genre/genre.model.js";

import {Games_developersModel} from "./models/game/games_developers/games_developers.model.js";
import {Genre_junctionModel} from "./models/game/genre_junction/genre_junction.model.js";
import {Games_publishersModel} from "./models/game/games_publishers/games_publishers.model.js";

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
        await FactModel.create({ fact: "born", game_id: game.id })
        await FactModel.create({ fact: "test", game_id: game.id })

        const dev2 = await DeveloperModel.create({
            title: 'Ubisoft',
            icon: 'https://ubi.com',
            game_id: game.id
        })

       const dev = await DeveloperModel.create({
            title: '2k',
            icon: 'https://icon.png',
            game_id: game.id,
        })

        await Games_developersModel.create({ game_id: game.id, developer_id: dev.id })
        await Games_developersModel.create({ game_id: game.id, developer_id: dev2.id })


        const genre1 = await GenreModel.create({ genre: 'shooter' })
        const genre2 = await GenreModel.create({ genre: 'action' })

        await Genre_junctionModel.create({ genre_id: genre1.id, game_id: game.id })
        await Genre_junctionModel.create({ genre_id: genre2.id, game_id: game.id })

        const pub1 = await PublisherModel.create({ title: '2k', icon: 'null' })
        const pub2 = await PublisherModel.create({ title: 'Ubisoft', icon: 'null' })

        await Games_publishersModel.create({ game_id: game.id, publisher_id: pub1.id })
        await Games_publishersModel.create({ game_id: game.id, publisher_id: pub2.id })

        //const devs = await DeveloperModel.getAll()
        //console.log(devs)

        const all = await GameModel.getAll()

        //const all = await DeveloperModel.getAll()

        console.log(JSON.stringify(all, null, 2))

        //console.log(all)

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
    await FactModel.defineModel(sequelize)
    await GenreModel.define(sequelize)
    await PublisherModel.define(sequelize)

    await Genre_junctionModel.define(sequelize)
    await Games_developersModel.define(sequelize)
    await Games_publishersModel.define(sequelize)

    await GameModel.modelHasMany(ImageModel._imageModel, {foreignKey: 'game_id', asWhat: 'images'})
    await GameModel.modelHasMany(VideoModel._videoModel, {foreignKey: 'game_id', asWhat: 'videos'})
    await GameModel.modelHasMany(FactModel._factModel, {foreignKey: 'game_id', asWhat: 'game_facts'})
    await GameModel.modelHasMany(AchievementModel._achievementModel, {foreignKey: 'game_id', asWhat: 'achievements'})

    await GameModel.belongsToMany(DeveloperModel._devModel, {
        foreignKey: 'game_id',
        asWhat: 'developers',
        through: 'GamesDevelopers'
    })
    await DeveloperModel.belongsToMany(GameModel._gameModel, {
        foreignKey: 'developer_id',
        asWhat: 'games',
        through: 'GamesDevelopers'
    })



    await GameModel.belongsToMany(GenreModel._genreModel, {
        foreignKey: 'game_id',
        asWhat: 'genres',
        through: 'GenreJunction'
    })
    await GenreModel.belongsToMany(GameModel._gameModel, {
        foreignKey: 'genre_id',
        asWhat: 'games',
        through: 'GenreJunction'
    })


    await GameModel.belongsToMany(PublisherModel._pubModel, {
        foreignKey: 'game_id',
        asWhat: 'publishers',
        through: 'GamesPublishers'
    })
    await PublisherModel.belongsToMany(GameModel._gameModel, {
        foreignKey: 'publisher_id',
        asWhat: 'games',
        through: 'GamesPublishers'
    })
}

export async function seqSync(setting) {
    await sequelize.sync(setting)
}