export class ModelController {

    _modelsSetUp = null

    constructor(modelsSetUp) {
        this._modelsSetUp = modelsSetUp
    }

    async setUp(sequelize) {

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

        await this.setUpBelongsTo(links.belongsTo)

        await this.setUpHasOne(links.hasOne)

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
        for (let conf of modelList) {
            const {
                model,
                foreignKey,
                asWhat,
                belongsToMany
            } = conf

            for (let linkModel of belongsToMany) {
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
    async belongsToMany(ModelClass, LinkModelClass, {foreignKey, asWhat, through}) {
        await ModelClass._model.belongsToMany(LinkModelClass._model, {
            foreignKey,
            as: asWhat,
            through
        })

        await this.modelIncludePush(ModelClass, LinkModelClass, {
            as: asWhat,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
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
        await ModelClass._model.hasMany(LinkModelClass._model, {
            foreignKey: foreignKey,
            as: asWhat,
        })

        await this.modelIncludePush(ModelClass, LinkModelClass, {
            as: asWhat,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        })
    }

    async setUpBelongsTo(modelList) {
        for (let conf of modelList) {
            const {
                model,
                foreignKey,
                asWhat,
                belongsTo
            } = conf

            for (let linkModel of belongsTo) {
                await this.belongsTo(
                    model,
                    linkModel.model, {
                        foreignKey,
                        asWhat: asWhat || linkModel.asWhat
                    }
                )
            }
        }
    }
    async belongsTo(ModelClass, LinkModelClass, {foreignKey, asWhat}) {
        await ModelClass._model.belongsTo(LinkModelClass._model, {
            foreignKey,
            as: asWhat
        })

        await this.modelIncludePush(ModelClass, LinkModelClass, {
            as: asWhat,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        })
    }

    async setUpHasOne(modelList) {
        for (let conf of modelList) {
            const {
                model,
                foreignKey,
                hasOne
            } = conf

            for (let one of hasOne) {
                await this.hasOne(model, one.model, {
                    foreignKey,
                    asWhat: one.asWhat
                })
            }
        }
    }
    async hasOne(ModelClass, LinkModelClass, {foreignKey, asWhat}) {
        await ModelClass._model.hasOne(LinkModelClass._model, {
            foreignKey,
            as: asWhat
        })

        await this.modelIncludePush(ModelClass, LinkModelClass, {
            as: asWhat,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'game_id']
            }
        })
    }

    async defineModel(ModelClass, {modelName, model, configs}, sequelize) {
        ModelClass._model = await sequelize.define(modelName, model, configs)

        return ModelClass._model
    }

    async modelIncludePush(ModelClass, LinkModelClass, {as, attributes, through = undefined}) {
        try {
            ModelClass._modelConfigs.include.push({
                model: LinkModelClass._model,
                as,
                attributes,
                through
            })
        } catch (e) {
            console.log(ModelClass)

            throw new Error(e.message)
        }
    }
}