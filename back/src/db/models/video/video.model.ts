import {DataTypes} from "sequelize";
import {IModel} from "../../model.interface/model.interface.js";

export class VideoModel implements IModel{
    _model = null
    _modelConfigs = {
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