import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class FactModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'Fact',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            fact: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        },
        configs: {
            tableName: 'Facts'
        }
    }
}