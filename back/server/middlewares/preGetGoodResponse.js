export function preGetGoodResponse(req, res, next) {
    res.status(200)
    res.type('application/json')

    next()
}