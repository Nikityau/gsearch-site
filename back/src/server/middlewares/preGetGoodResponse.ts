import {Response, Request, NextFunction} from "express";

export function preGetGoodResponse(req:Request, res:Response, next: NextFunction) {
    res.status(200)
    res.type('application/json')

    next()
}