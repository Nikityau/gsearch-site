import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class PublisherModel implements IModel {
    _model = null;
    _modelConfigs = {
        modelName: 'Publisher',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        configs: {
            tableName: 'Publishers'
        },
        include: []
    }
}