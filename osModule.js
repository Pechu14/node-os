const os = require('os');
const nombre = os.type();
//console.log(`Nombre: ${nombre}`);
const tipo = os.platform();
//console.log(`Tipo: ${tipo}`);
const version = os.release();
//console.log(`Versión: ${version}`);
const arquitectura = os.arch();
//console.log(`Arquitectura: ${arquitectura}`);
const cpus = os.cpus().length;
//console.log(`CPUs: ${cpus}`);

const memoriaTotal = os.totalmem();
const memoriaTotalEnGb = (memoriaTotal / (1024 ** 3)).toFixed(3);
//console.log(`Memoria Total: ${memoriaTotalEnGb} GB`);

const memoriaLibre = os.freemem();
const memoriaLibreEnGb = (memoriaLibre / (1024 ** 3)).toFixed(3);
//console.log(`Memoria Libre: ${memoriaLibreEnGb} GB`);

function obtenerSystemInfo() {
    return {
      nombre: os.type(),
      tipo: os.platform(),
      version: os.release(),
      arquitectura: os.arch(),
      cpus: os.cpus().length,
      memoriaTotalEnGB: (os.totalmem() / (1024 ** 3)).toFixed(3),
      memoriaLibreEnGB: (os.freemem() / (1024 ** 3)).toFixed(3),
    };
  }
  module.exports = {
    obtenerSystemInfo
  };