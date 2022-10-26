import {IModelJunction} from "./modelJunction.interface.js";

export interface IModelInclude {
    as: string,
    attributes: {
        include?: string[],
        exclude: string[]
    },
    through?: string | IModelJunction
}