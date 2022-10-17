import { DataTypes } from "sequelize";

export class FactModel {
    static _factModel = null

    static async defineModel(sequelize) {
        FactModel._factModel = sequelize.define('Fact', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            fact: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, {
            tableName: 'Facts'
        })
    }

    static async create(factObj) {
        const fact = await FactModel._factModel.create(factObj);

        await fact.save()

        return fact;
    }
}