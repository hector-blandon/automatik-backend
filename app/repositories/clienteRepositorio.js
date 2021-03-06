const clienteRepositorio = module.exports;
const DB = require('../utils/DB');

clienteRepositorio.crearCliente = (cliente) => DB('cliente').insert(cliente).returning('*');
clienteRepositorio.buscarClientes = (idTaller) => DB('cliente').select('*').where('idTaller', idTaller).orderBy('idCliente', 'asc');
clienteRepositorio.buscarClientePorNit = (nit) => DB('cliente').select('*').where('nit', nit).first();
clienteRepositorio.buscarClientePorId = (idCliente) => DB('cliente').select('*').where('idCliente', idCliente);
clienteRepositorio.buscarClientePorCorreo = (correo) => DB('cliente').select('*').where('correo', correo);
clienteRepositorio.actualizarCliente = (cliente, idCliente) => DB('cliente').where('idCliente', idCliente).update(cliente).returning('*');
clienteRepositorio.contarClientePorNit = (nit) => DB('cliente').count('*').where({ nit: nit }).first();
clienteRepositorio.eliminarCliente = (idCliente) => DB('cliente').select('*').where('idCliente', idCliente).del().returning('*');
clienteRepositorio.enviarNotificacionReparado = (idTaller) => DB('cliente').select('*').where('idTaller', idTaller);