import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {DeveloperModel} from "../../relations/developer/developer.model.js";

import {IModelJunction} from "../../../../model.interface/modelJunction.interface.js";

export class Games_developersModel implements IModelJunction {
    _model = null
    _modelConfigs = {
        modelName: 'GamesDevelopers',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            game_id: {
                type: DataTypes.UUID,

            },
            developer_id: {
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
    model: DeveloperModel._modelConfigs.configs.tableName,
        key: 'id'
}*/
