const os = require('os');
const interfaces = os.networkInterfaces();
const interfacesInfo = Object.entries(interfaces).map(([name, addrs]) => {
    return {
      nombre: name,
      direcciones: addrs.map(addr => ({
        familia: addr.family,
        direccion: addr.address,
        interna: addr.internal
      }))
    };
  });
  //console.log(JSON.stringify(interfacesInfo, null,));
  function printNetworkModule(interfaces) {
    console.log('Interfaces de red:');
    console.log(JSON.stringify(interfacesInfo, null,));
  }
  printNetworkModule();

  module.exports = {
    interfacesInfo,
    printNetworkModule
  };
  
 