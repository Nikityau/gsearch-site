import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {PublisherModel} from "../../relations/publisher/publisher.model.js";

import {IModelJunction} from "../../../../model.interface/modelJunction.interface.js";

export class Games_publishersModel implements IModelJunction {
    _model = null
    _modelConfigs = {
        modelName: 'GamesPublishers',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            game_id: {
                type: DataTypes.UUID,

            },
            publisher_id: {
                type: DataTypes.UUID,

            }
        },
        configs: undefined
    }
}

/*
references: {
    model: GameModel._modelConfigs.configs.tableName,
        key: 'id'
}

references: {
    model: PublisherModel._modelConfigs.configs.tableName,
        key: 'id'
}*/
