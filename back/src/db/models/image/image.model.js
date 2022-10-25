import { DataTypes } from 'sequelize'

export class ImageModel {
    static _model = null
    static _modelConfigs = {
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


    static async belongsTo(model, foreignKey) {
        //ImageModel._imageModel.belongsTo(model)
    }
}