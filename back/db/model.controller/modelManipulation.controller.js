export class ModelManipulationController {
    static async create(ModelClass, modelData) {
        const createdModel = await ModelClass._model.create(modelData)

        await createdModel.save()

        return createdModel
    }


    static async getAll(ModelClass, findOptions = undefined) {
        //console.log(ModelClass)
        return await ModelClass._model.findAll({
            include: findOptions
        })
        //return  await sequelize.models.Game.findAll(findOptions)
    }
}