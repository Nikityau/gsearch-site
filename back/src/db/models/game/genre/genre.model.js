import {DataTypes} from "sequelize";

export class GenreModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'Genre',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            genre: {
                type: DataTypes.STRING,
                unique: true
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null
            }
        },
        configs: {
            tableName: 'Genres'
        },
        include: []
    }
}