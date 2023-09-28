document.getElementById("generarQR").addEventListener("click", function () {
    const correo = document.getElementById("email").value;
    const nombre = document.getElementById("nombres").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const datos = `Correo: ${correo}, Nombre: ${nombre}, Direccion: ${direccion}, Ciudad: ${ciudad}`;
    generarCodigoQR(datos);
  });
  
  function generarCodigoQR(datos) {
    const imgQR = new QRCode("codigoQR", {text: datos});
  }
  

//const contenedorQR = document.getElementById('contenedorQR')
//const formulario = document.getElementById('formulario')

//const QR = new QRCode(contenedorQR);

//formulario.addEventListener('submit', (e) =>{
//    e.preventDefault();
//    QR.makeCode(formulario.link.value);
//});
