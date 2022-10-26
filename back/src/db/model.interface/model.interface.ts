import {IModelConfigs} from "./modelConfigs.interface.js";
import {ModelCtor} from "sequelize";

export interface IModel {
    _model: ModelCtor<any> | null
    _modelConfigs: IModelConfigs
}