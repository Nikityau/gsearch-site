import {DataTypes} from "sequelize";

export class GenreModel {
    static _genreModel = null

    static async define(sequelize) {
        GenreModel._genreModel = sequelize.define('Genre', {
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
        }, {
            tableName: 'Genres'
        })
    }

    static async create(obj) {
        const genre = await GenreModel._genreModel.create(obj)

        await genre.save()

        return genre
    }

    static async belongsToMany(model, { foreignKey, asWhat, through }) {
        GenreModel._genreModel.belongsToMany(model, {
            foreignKey: foreignKey,
            as: asWhat,
            through: through
        })
    }
}