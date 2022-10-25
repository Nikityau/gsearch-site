import {DataTypes} from "sequelize";
import {RequirementsModel} from "../requirements/requirements.model.js";

export class System_requirementsModel {
    static _model = null
    static _modelConfigs = {
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
                references: {
                    model: RequirementsModel._modelConfigs.config.tableName,
                    key: 'id'
                }
            },
            recommended: {
                type: DataTypes.UUID,
                allowNull: true,
                defaultValue: null,
                references: {
                    model: RequirementsModel._modelConfigs.config.tableName,
                    key: 'id'
                }
            }
        },
        configs: {
            tableName: 'SystemRequirements'
        },
        include: []
    }
}