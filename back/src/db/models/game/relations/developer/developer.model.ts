import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class DeveloperModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'Developer',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        configs: {
            tableName: 'Developers'
        },
        include: []
    }
}