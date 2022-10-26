import {IModel} from "../model.interface/model.interface.js";
import {IModelJunction} from "../model.interface/modelJunction.interface.js";
import {IRelations} from "./modelsSetUpObj.relations.interface.js";

export interface IModelSetUpObj {
    models: IModel[],
    junction_models: IModelJunction[],
    links: IRelations
}
