import {DataTypes} from "sequelize";

export class FactModel {
    static _model = null
    static _modelConfigs = {
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