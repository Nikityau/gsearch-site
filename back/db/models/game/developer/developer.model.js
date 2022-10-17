import {DataTypes} from "sequelize";

export class DeveloperModel {
    static _devModel = null

    static async defineModel(sequelize) {
        DeveloperModel._devModel = sequelize.define('Developer', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName: 'Developers'
        })
    }

    static async belongsToMany(model, { foreignKey, asWhat, through }) {
        DeveloperModel._devModel.belongsToMany(model, {
            foreignKey: foreignKey,
            as: asWhat,
            through: through
        })
    }

    static async create(devObj) {
        const dev = await DeveloperModel._devModel.create(devObj)

        await dev.save()

        return dev
    }

    static async getAll() {
        const dev = await DeveloperModel._devModel.findAll({
            include: [
                'games',
            ]
        })

        return JSON.stringify(dev, null, 2)
    }
}