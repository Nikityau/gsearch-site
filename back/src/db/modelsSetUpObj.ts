import {IModel} from "./model.interface/model.interface.js";
import {IModelJunction} from "./model.interface/modelJunction.interface.js";
import { IModelSetUpObj } from "./modelsSetUpObj.interface/modelsSetUpObj.interface.js";

import {GameModel, GameModelHOM} from "./models/game/game.model.js";
import {ImageModel} from "./models/image/image.model.js";
import {VideoModel} from "./models/video/video.model.js";

import GameRelations, { gameModels } from './models/game/relations/import.models.js'
import GameJunctionRelations, { gameJunctions } from './models/game/junction_model/import.models.junction.js'

export function PushModels() {
    gameModels.map(Class => {
        modelsSetUpObj.models.push(new Class())
    })
}

export function PushJunctions() {
    gameJunctions.map(Class => {
        modelsSetUpObj.junction_models.push(new Class())
    })
}

export const modelsSetUpObj: IModelSetUpObj = {
    models: [
        new GameModel(),
        new ImageModel(),
        new VideoModel(),
    ],
    junction_models: [],
    links: {
        belongsTo: [],
        hasOne: [],
        manyToMany: [],
        oneToMany: [

        ]
    }
}

/*export const modelsSetUpObj = {
    models: [
        GameModel,
        ImageModel,
        VideoModel,
        AchievementModel,
        DeveloperModel,
        PublisherModel,
        FactModel,
        GenreModel,
        Game_tagModel,
        Info_tagModel,
        RatingModel,
        Age_ratingModel,
        Game_seriesModel,
        LanguageModel,
        AwardsModel,
        RequirementsModel,
        System_requirementsModel
    ],
    junction_models: [
        Genre_junctionModel,
        Games_publishersModel,
        Games_developersModel,
        Games_tags_junctionModel,
        Info_tags_junctionModel,
        Age_ratings_junctionModel,
        Language_junctionModel
    ],
    links: {
        oneToMany: [
            {
                model: GameModel,
                foreignKey: 'game_id',
                hasMany: [
                    {
                        model: FactModel,
                        asWhat: 'game_facts',
                    },
                    {
                        model: ImageModel,
                        asWhat: 'images'
                    },
                    {
                        model: VideoModel,
                        asWhat: 'videos'
                    },
                    {
                        model: AchievementModel,
                        asWhat: 'achievements'
                    },
                    {
                        model: RatingModel,
                        asWhat: 'ratings'
                    },
                    {
                        model: AwardsModel,
                        asWhat: 'awards'
                    },
                ]
            },
            {
                model: Game_seriesModel,
                foreignKey: 'game_series_id',
                hasMany: [
                    {
                        model: GameModel,
                        asWhat: 'games'
                    }
                ]
            }
        ],
        manyToMany: [
            {
                model: GameModel,
                foreignKey: 'game_id',
                asWhat: 'games',
                belongsToMany: [
                    {
                        model: GenreModel,
                        asWhat: 'genres',
                        foreignKey: 'genre_id',
                        through: Genre_junctionModel._modelConfigs.modelName
                    },
                    {
                        model: PublisherModel,
                        asWhat: 'publishers',
                        foreignKey: 'publisher_id',
                        through: Games_publishersModel._modelConfigs.modelName
                    },
                    {
                        model: DeveloperModel,
                        asWhat: 'developers',
                        foreignKey: 'developer_id',
                        through: Games_developersModel._modelConfigs.modelName
                    },
                    {
                        model: Game_tagModel,
                        asWhat: 'game_tags',
                        foreignKey: 'game_tag_id',
                        through: Games_tags_junctionModel._modelConfigs.modelName
                    },
                    {
                        model: Info_tagModel,
                        asWhat: 'info_tags',
                        foreignKey: 'info_tag_id',
                        through: Info_tags_junctionModel._modelConfigs.modelName
                    },
                    {
                        model: Age_ratingModel,
                        asWhat: 'age_ratings',
                        foreignKey: 'age_rating_id',
                        through: Age_ratings_junctionModel._modelConfigs.modelName
                    },
                    {
                        model: LanguageModel,
                        asWhat: 'languages_support',
                        foreignKey: 'lang_id',
                        through: Language_junctionModel._modelConfigs.modelName
                    }
                ]
            }
        ],
        belongsTo: [
            {
                model: System_requirementsModel,
                foreignKey: 'system_requirements_id',
                belongsTo: [
                    {
                        model: RequirementsModel,
                        asWhat: 'requirement'
                    }
                ]
            }
        ],
        hasOne: [
            {
                model: GameModel,
                foreignKey: 'game_id',
                hasOne: [
                    {
                        model: System_requirementsModel,
                        asWhat: 'system_requirements'
                    }
                ]
            },
        ]
    }
}*/

    /*[
    {
        model: GameModel,
        foreignKey: 'game_id',
        belongsTo: [
            {
                model: Game_seriesModel,
                asWhat: 'game_series'
            },
            {
                model: System_requirementsModel,
                asWhat: 'system_requirements'
            }
        ]
    }
    ]*/