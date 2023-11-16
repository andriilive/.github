module.exports = (req, res, next) => {

    if (req.method === 'GET') {
        res.header('X-Hello', 'World')
    }

    next()
}
