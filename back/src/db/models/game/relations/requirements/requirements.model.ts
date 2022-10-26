import {DataTypes, DATE} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class RequirementsModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'Requirements',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            spec_requirements: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null
            },
            oc: {
                type: DataTypes.STRING,
                allowNull: false
            },
            processor: {
                type: DataTypes.STRING,
                allowNull: false
            },
            gpu: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ram: {
                type: DataTypes.STRING,
                allowNull: false
            },
            network: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            addition: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null
            }
        },
        config: {
            tableName: 'Requirements'
        }
    }
}