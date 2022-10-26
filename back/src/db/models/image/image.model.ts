import { DataTypes } from 'sequelize'
import {IModel} from "../../model.interface/model.interface.js";

export class ImageModel implements IModel {
    _model = null
     _modelConfigs = {
        modelName: 'Image',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        configs: {
            tableName:"Images"
        }
    }
}