import {DataTypes} from "sequelize";

export class DeveloperModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'Developer',
        model: {
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
        },
        configs: {
            tableName: 'Developers'
        },
        include: []
    }
}