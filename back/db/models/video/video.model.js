import { DataTypes } from "sequelize";


export class VideoModel {
    static _videoModel = null

    static async defineModel(sequelize) {
        VideoModel._videoModel = sequelize.define('Video', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            url: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            tableName: 'Videos'
        })
    }

    static async create(videoObj) {
        const video = await VideoModel._videoModel.create(videoObj)

        await video.save()

        return video
    }

    static async getAll() {
        const video = await VideoModel._videoModel.findAll()

        return JSON.stringify(video, null, 2);
    }
}