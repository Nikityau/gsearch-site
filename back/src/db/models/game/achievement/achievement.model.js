import {DataTypes} from "sequelize";

export class AchievementModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'Achievement',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            aim: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        configs: {
            tableName: 'Achievements'
        }
    }
}