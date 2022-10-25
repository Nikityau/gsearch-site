import {DataTypes} from "sequelize";

export class Game_tagModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'GameTag',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            tag_title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        configs: {
            tableName: 'GamesTags'
        },
        include: []
    }
}