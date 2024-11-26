function always404()
{
    return function ( req, res, next){
        res.status(404).send('Whoops, not found.')
    }
}

module.exports = always404;