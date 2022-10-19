import {DataTypes} from "sequelize";

export class PublisherModel {
    static _model = null;
    static _modelConfigs = {
        modelName: 'Publisher',
        model: {
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
        },
        configs: {
            tableName: 'Publishers'
        },
        include: []
    }
}