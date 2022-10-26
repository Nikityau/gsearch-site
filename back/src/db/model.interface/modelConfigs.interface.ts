import {IModelInclude} from "./modelInclude.interface.js";
import {ModelAttributes} from "sequelize";

export interface IModelConfigs {
    modelName: string,
    model: ModelAttributes
    configs?: {
        tableName: string
    },
    include?: IModelInclude[]
}