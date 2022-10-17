import {DataTypes} from "sequelize";

export class AchievementModel {
    static _achievementModel = null

    static async defineModel(sequelize) {
        AchievementModel._achievementModel = sequelize.define('Achievement', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            aim: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName: 'Achievements'
        })
    }

    static async create(achieveObj) {
        const achievement = await AchievementModel._achievementModel.create(achieveObj)

        await achievement.save()

        return achievement
    }

    static async getAll() {
        const all = await AchievementModel._achievementModel.findAll()

        return JSON.stringify(all, null, 2)
    }
}