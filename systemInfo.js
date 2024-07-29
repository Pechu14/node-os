const { obtenerSystemInfo } = require('./osModule');

function printOsModule() {
    const systemInfo = obtenerSystemInfo();
  
    console.log(`Nombre: ${systemInfo.nombre}`);
    console.log(`Tipo: ${systemInfo.tipo}`);
    console.log(`Versión: ${systemInfo.version}`);
    console.log(`Arquitectura: ${systemInfo.arquitectura}`);
    console.log(`Cpus: ${systemInfo.cpus}`);
    console.log(`Memoria Total: ${systemInfo.memoriaTotalEnGB} GB`);
    console.log(`Memoria Libre: ${systemInfo.memoriaLibreEnGB} GB`);
}
printOsModule();

const { interfacesInfo, printNetworkModule } = require('./networkModule');
printNetworkModule();