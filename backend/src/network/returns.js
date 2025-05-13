// Función para respuestas exitosas
exports.success = function (req, res, message = '', status = 200){

    res.status(status).send({
        error: false,
        status: status,
        body: message
    });
}

// Función para respuestas con error
exports.error = function (req, res, message = '', status = 500){
    
    res.status(status).send({
        error: true,  // Aquí se indica que hubo un error
        status: status,
        body: message
    });
}
