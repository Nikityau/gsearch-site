export class ModelController {

    _modelsSetUp = null

    constructor(modelsSetUp) {
        this._modelsSetUp = modelsSetUp
    }

    async setUp(sequelize) {
       try {
           const {
               models,
               junction_models,
               links
           } = this._modelsSetUp

           await this.setUpModelsList(
               models,
               sequelize
           )
           await this.setUpModelsList(
               junction_models,
               sequelize
           )

           await this.setUpOneToMany(links.oneToMany)

           await this.setUpManyToMany(links.manyToMany)
       } catch (e) {
           console.log('die on set up')
       }
    }

    async setUpModelsList(modelList, sequelize) {
        for (let ModelClass of modelList) {
            await this.defineModel(
                ModelClass,
                ModelClass._modelConfigs,
                sequelize
            )
        }
    }

    async setUpManyToMany(modelList) {
        for(let conf of modelList) {
            const {
                model,
                foreignKey,
                asWhat,
                belongsToMany
            } = conf

            for(let linkModel of belongsToMany) {
                await this.belongsToMany(
                    model,
                    linkModel.model,
                    {
                        foreignKey,
                        asWhat: linkModel.asWhat,
                        through: linkModel.through
                    }
                )

                await this.belongsToMany(
                    linkModel.model,
                    model,
                    {
                        foreignKey: linkModel.foreignKey,
                        asWhat,
                        through: linkModel.through
                    }
                )
            }
        }
    }
    async belongsToMany(ModelClass,LinkModelClass, {foreignKey, asWhat, through}) {
        ModelClass._model.belongsToMany(LinkModelClass._model, {
            foreignKey,
            as: asWhat,
            through
        })

        ModelClass._modelConfigs.include.push({
            model: LinkModelClass._model,
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            },
            as: asWhat,
            through
        })
    }

    async setUpOneToMany(modelList) {
        for (let conf of modelList) {
            const {model, foreignKey, hasMany} = conf
            for (let linkModel of hasMany) {
                await this.hasMany(
                    model,
                    linkModel.model,
                    {
                        foreignKey,
                        asWhat: linkModel.asWhat
                    }
                )
            }
        }
    }
    async hasMany(ModelClass, LinkModelClass, {foreignKey, asWhat}) {
        ModelClass._model.hasMany(LinkModelClass._model, {
            foreignKey: foreignKey,
            as: asWhat,
        })

        ModelClass._modelConfigs.include.push({
            model: LinkModelClass._model,
            as: asWhat,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
    }


    async defineModel(ModelClass, {modelName, model, configs}, sequelize) {
        ModelClass._model = await sequelize.define(modelName, model, configs)
    }

    static async createModel(ModelClass, modelData) {
        const createdModel = await ModelClass._model.create(modelData)

        await createdModel.save()

        return createdModel
    }

    static async getAll(ModelClass, findOptions = undefined) {
        return await ModelClass._model.findAll(findOptions)
    }
}