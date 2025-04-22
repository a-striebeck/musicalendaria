// Función para respuestas exitosas
exports.success = function (req, res, message, status){
    const statusCode = status || 200;
    const messageOK = message || 'Operación exitosa';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: messageOK
    });
}

// Función para respuestas con error
exports.error = function (req, res, message, status){
    const statusCode = status || 500;
    const messageError = message || 'Error interno del servidor';
    res.status(statusCode).send({
        error: true,  // Aquí se indica que hubo un error
        status: statusCode,
        body: messageError
    });
}
