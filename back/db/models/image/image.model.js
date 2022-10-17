import { DataTypes } from 'sequelize'

export class ImageModel {
    static  _imageModel = null;

    static async defineModel(sequelize) {
        ImageModel._imageModel = sequelize.define('Image', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName:"Images"
        })
    }

    static async create(imageObj) {
        const image = await ImageModel._imageModel.create(imageObj)

        await image.save()

        return image
    }

    static async belongsTo(model, foreignKey) {
        ImageModel._imageModel.belongsTo(model)
    }

    static async getAll() {
        const all = await ImageModel._imageModel.findAll()

        return JSON.stringify(all, null, 2)
    }
}