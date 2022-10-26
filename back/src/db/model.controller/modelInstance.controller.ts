import {Sequelize} from "sequelize";

import {IModelInstanceController} from '../model.controller.interface/modelInstance.controller.interface.js'
import {IMLO} from "../model.controller.interface/model.link.options.interface.js";
import {IModelConfigs} from "../model.interface/modelConfigs.interface.js";
import {IModel} from "../model.interface/model.interface.js";
import {IModelSetUpObj} from "../modelsSetUpObj.interface/modelsSetUpObj.interface.js";
import {hasOne, manyToMany, oneToMany} from "../modelsSetUpObj.interface/modelsSetUpObj.relations.interface.js";

export class ModelInstanceController implements IModelInstanceController {
    _modelSetup

    constructor(modelSetUpObj: IModelSetUpObj) {
        this._modelSetup = modelSetUpObj
    }

    async setUp(sequelize: Sequelize): Promise<void> {
        const {
            models,
            junction_models,
            links
        } = this._modelSetup

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

        await this.setUpHasOne(links.hasOne)
    }

    async setUpHasOne(modelList: hasOne[]): Promise<void> {
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

    async setUpManyToMany(modelList: manyToMany[]): Promise<void> {
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

    async setUpOneToMany(modelList: oneToMany[]): Promise<void> {
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

    async belongsToMany(ModelClass: IModel, LinkModelClass: IModel, {
        model,
        asWhat,
        through,
        foreignKey
    }: IMLO): Promise<void> {
        if (!ModelClass._model || !LinkModelClass._model) return
        if (!through || !asWhat) return

        await ModelClass._model.belongsToMany(LinkModelClass._model, {
            foreignKey,
            as: asWhat,
            through
        })

        await this.modelIncludePush(ModelClass, LinkModelClass, {
            asWhat,
            foreignKey,
            through
        })
    }

    async hasMany(ModelClass: IModel, LinkModelClass: IModel, { model, asWhat, through,foreignKey } : IMLO): Promise<void> {
        if(!ModelClass._model || !LinkModelClass._model) return

        await ModelClass._model.hasMany(LinkModelClass._model, {
            foreignKey,
            as: asWhat,
        })

        await this.modelIncludePush(ModelClass, LinkModelClass, {
            asWhat,
            through,
            foreignKey
        })
    }

    async hasOne(ModelClass: IModel, LinkModelClass: IModel, {
        model,
        asWhat,
        through,
        foreignKey
    }: IMLO): Promise<void> {
        if(!ModelClass._model || !LinkModelClass._model) return

        await ModelClass._model.hasOne(LinkModelClass._model, {
            foreignKey,
            as: asWhat
        })

        await this.modelIncludePush(ModelClass, LinkModelClass, {
            asWhat,
            through,
            foreignKey
        })
    }

    async setUpModelsList(modelList: IModel[], sequelize: Sequelize): Promise<void> {
        for (let ModelClass of modelList) {
            await this.defineModel(
                ModelClass,
                ModelClass._modelConfigs,
                sequelize
            )
        }
    }

    async defineModel(ModelClass: IModel, {
        modelName,
        model,
        configs
    }: IModelConfigs, sequelize: Sequelize): Promise<any> {
        ModelClass._model = await sequelize.define(modelName, model, configs)

        return ModelClass._model
    }

    async modelIncludePush(ModelClass: IModel, LinkModelClass: IModel, {
        model,
        asWhat,
        through,
        foreignKey
    }: IMLO): Promise<void> {
        ModelClass._modelConfigs.include?.push({
            as: asWhat || '',
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            through
        })
    }
}
