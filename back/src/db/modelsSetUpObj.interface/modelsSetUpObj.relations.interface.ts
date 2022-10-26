import {IModel} from "../model.interface/model.interface.js";
import {IModelJunction} from "../model.interface/modelJunction.interface.js";

export interface ILinkModel {
    model: IModel,
    asWhat: string
}

export interface IExplicitLinkModel extends ILinkModel{
    foreignKey: string,
    through: string | undefined
}

export type oneToMany = {
    model: IModel,
    foreignKey: string,
    hasMany: ILinkModel[]
}
export type manyToMany = {
    model: IModel,
    foreignKey: string,
    asWhat: string,
    belongsToMany: IExplicitLinkModel[],
}
export type belongsTo = {
    model: IModel,
    foreignKey: string,
    belongsTo: ILinkModel[]
}
export type hasOne = {
    model: IModel,
    foreignKey: string,
    hasOne: ILinkModel[]
}

export interface IRelations {
    oneToMany: oneToMany[],
    manyToMany: manyToMany[]
    belongsTo: belongsTo[],
    hasOne: hasOne[]
}