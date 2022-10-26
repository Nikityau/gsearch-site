import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class AwardsModel implements IModel {
    _model = null
    _modelConfigs = {
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