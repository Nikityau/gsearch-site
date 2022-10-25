import {DataTypes} from "sequelize";


export class VideoModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'Video',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            url: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        configs: {
            tableName: 'Videos'
        }
    }
}