import {GameModel} from "./models/game/game.model.js";
import {ImageModel} from "./models/image/image.model.js";
import {VideoModel} from "./models/video/video.model.js";
import {AchievementModel} from "./models/game/achievement/achievement.model.js";
import {DeveloperModel} from "./models/game/developer/developer.model.js";
import {PublisherModel} from "./models/game/publisher/publisher.model.js";
import {FactModel} from "./models/game/fact/fact.model.js";
import {GenreModel} from "./models/game/genre/genre.model.js";
import {Game_tagModel} from "./models/game/game_tag/game_tag.model.js";
import {Info_tagModel} from "./models/game/info_tag/info_tag.model.js";
import {RatingModel} from "./models/game/rating/rating.model.js";
import {Age_ratingModel} from "./models/game/age_rating/age_rating.model.js";

import {Genre_junctionModel} from "./models/game/junction_model/genre_junction/genre_junction.model.js";
import {Games_publishersModel} from "./models/game/junction_model/games_publishers/games_publishers.model.js";
import {Games_developersModel} from "./models/game/junction_model/games_developers/games_developers.model.js";
import {
    Games_tags_junctionModel
} from "./models/game/junction_model/game_tag_junction/games_tags_junction.model.js";
import {Info_tags_junctionModel} from "./models/game/junction_model/info_tags_junction/info_tags_junction.model.js";
import {
    Age_ratings_junctionModel
} from "./models/game/junction_model/age_rating_junction/age_ratings_junction.model.js";

export const modelsSetUpObj = {
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
        Age_ratingModel
    ],
    junction_models: [
        Genre_junctionModel,
        Games_publishersModel,
        Games_developersModel,
        Games_tags_junctionModel,
        Info_tags_junctionModel,
        Age_ratings_junctionModel
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
                    }
                ]
            }
        ]
    }
}