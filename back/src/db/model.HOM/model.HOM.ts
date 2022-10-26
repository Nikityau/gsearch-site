import {IModel} from "../model.interface/model.interface.js";

export class ModelHOM {
    _modelInst: IModel

    constructor(ModelClass: IModel) {
        this._modelInst = ModelClass
    }

    async pushInclude() {
    }
}