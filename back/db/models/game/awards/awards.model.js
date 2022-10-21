import {DataTypes} from "sequelize";

export class AwardsModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'Award',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            award_title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            award_icon: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            award_date: {
                type: DataTypes.DATE,
                allowNull: false,
                unique: true,
                defaultValue: DataTypes.DATE
            }
        }
    }
}