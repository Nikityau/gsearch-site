import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class System_requirementsModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'SystemRequirements',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            minimal: {
                type: DataTypes.UUID,
                allowNull: true,
                defaultValue: null,

            },
            recommended: {
                type: DataTypes.UUID,
                allowNull: true,
                defaultValue: null,

            }
        },
        configs: {
            tableName: 'SystemRequirements'
        },
        include: []
    }
}

/*
*
*  references: {
                    model: RequirementsModel._modelConfigs.config.tableName,
                    key: 'id'
                }
                *
                *  references: {
                    model: RequirementsModel._modelConfigs.config.tableName,
                    key: 'id'
                }
* */