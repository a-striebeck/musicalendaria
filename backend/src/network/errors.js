const returns = require('./returns');

function errors(err, req, res, next){
    console.error('[error', err);

    const message = err.message || 'Error interno';
    const status = err.statusCode || 500;

    returns.error(req, res, message, status);
}

module.exports = errors;