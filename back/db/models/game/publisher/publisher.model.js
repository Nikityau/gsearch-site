import { DataTypes } from "sequelize";

export class PublisherModel {
    static _pubModel = null


    static async define(sequelize) {
        PublisherModel._pubModel = sequelize.define('Publisher', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName: 'Publishers'
        })
    }

    static async create(obj) {
        const pub = await PublisherModel._pubModel.create(obj)

        await pub.save()

        return pub;
    }

    static async belongsToMany(model, { foreignKey, asWhat, through }) {
        PublisherModel._pubModel.belongsToMany(model, {
            foreignKey: foreignKey,
            as: asWhat,
            through: through
        })
    }
}