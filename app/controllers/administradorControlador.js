const administradorControlador = module.exports;
const administradorServicio = require('../services/administradorServicio');
const { BaseError } = require('../utils/ErrorHandlerMiddleware');
const Validator = require('../validators/validator');
const adminRegisterSchema = require('../validators/administradorRegisterSchema');

administradorControlador.crearAdministrador = async(req, res, next) => {
    console.log('administradorControlador.crearAdministrador');
    const { body } = req;
    try {
        Validator(adminRegisterSchema).validateRequest(body);
        return administradorServicio.crearAdministrador(body)
            .then((response) => res.send(response))
            .catch((error) => next(new BaseError(error.message)));
    } catch (error) {
        return next(error);
    }
};


administradorControlador.buscarAdministradorPorNit = async(req, res, next) => {
    console.log('administradorControlador.buscarAdministradorPorNit');
    const { nit } = req.params;
    return administradorServicio.buscarAdministradorPorNit(nit)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
administradorControlador.buscarAdministradorPorId = async(req, res, next) => {
    console.log('administradorControlador.buscarAdministradorPorId');
    const { idAdmin } = req.params;
    return administradorServicio.buscarAdministradorPorId(idAdmin)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};
administradorControlador.buscarAdministradorPorCorreo = async(req, res, next) => {
    console.log('administradorControlador.buscarAdministradorPorCorreo');
    const { correo } = req.params;
    return administradorServicio.buscarAdministradorPorCorreo(correo)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};


administradorControlador.actualizarAdministrador = async(req, res) => {
    const { body } = req;
    const { idAdmin } = req.params;
    return administradorServicio.actualizarAdministrador(body, idAdmin)
        .then((response) => res.send(response));
};
// actualizar el estado del administrador
administradorControlador.eliminarAdministrador = async(req, res, next) => {
    const { idAdmin } = req.params;
    return administradorServicio.eliminarAdministrador(idAdmin)
        .then((response) => res.send(response))
        .catch((error) => next(new BaseError(error.message)));
};