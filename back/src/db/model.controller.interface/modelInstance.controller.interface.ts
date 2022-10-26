import {Sequelize} from "sequelize";

import {IMLO} from "./model.link.options.interface.js";
import {IModelConfigs} from "../model.interface/modelConfigs.interface.js";
import {IModelSetUpObj} from "../modelsSetUpObj.interface/modelsSetUpObj.interface.js";

export interface IModelInstanceController {
    _modelSetup: IModelSetUpObj

    setUp(sequelize: Sequelize):Promise<void>

    setUpModelsList(modelList:any[], sequelize: Sequelize): Promise<void>

    setUpManyToMany(modelList: any[]):Promise<void>
    belongsToMany(ModelClass: any, LinkModelClass:any, MLO: IMLO): Promise<void>

    setUpOneToMany(modelList: any[]):Promise<void>
    hasMany(ModelClass: any, LinkModelClass:any, MLO: IMLO): Promise<void>

    setUpHasOne(modelList: any[]):Promise<void>
    hasOne(ModelClass: any, LinkModelClass:any, MLO: IMLO): Promise<void>

    defineModel(ModelClass:any, ModelConfigs: IModelConfigs, sequelize: Sequelize):Promise<any>

    modelIncludePush(ModelClass: any, LinkModelClass: any, MLO: IMLO):Promise<void>
}