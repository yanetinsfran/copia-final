// Obtener los elementos del formulario
const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const sexoInput = document.getElementById('sexo');
const categoriaInput = document.getElementById('categoria');
const kilometrosInput = document.getElementById('kilometros');
const tipoSangreInput = document.getElementById('tipoSangre');
const obraSocialInput = document.getElementById('obraSocial');
const telefonoInput = document.getElementById('telefono');
const telefonoEmergenciaInput = document.getElementById('telefonoEmergencia');

// Función asincrónica para mostrar los datos en pantalla
async function mostrarDatos() {
  try {
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const edad = edadInput.value;
    const sexo = sexoInput.value;
    const categoria = categoriaInput.value;
    const kilometros = kilometrosInput.value;
    const tipoSangre = tipoSangreInput.value;
    const obraSocial = obraSocialInput.value;
    const telefono = telefonoInput.value;
    const telefonoEmergencia = telefonoEmergenciaInput.value;

    const datos = {
      nombre,
      apellido,
      edad,
      sexo,
      categoria,
      kilometros,
      tipoSangre,
      obraSocial,
      telefono,
      telefonoEmergencia
    };

    // Mostrar los datos en el HTML
    const confirmacionDiv = document.getElementById('confirmacion');
    const nombreConfirmacion = document.getElementById('nombreConfirmacion');
    const apellidoConfirmacion = document.getElementById('apellidoConfirmacion');
    const edadConfirmacion = document.getElementById('edadConfirmacion');
    const sexoConfirmacion = document.getElementById('sexoConfirmacion');
    const categoriaConfirmacion = document.getElementById('categoriaConfirmacion');
    const kilometrosConfirmacion = document.getElementById('kilometrosConfirmacion');
    const tipoSangreConfirmacion = document.getElementById('tipoSangreConfirmacion');
    const obraSocialConfirmacion = document.getElementById('obraSocialConfirmacion');
    const telefonoConfirmacion = document.getElementById('telefonoConfirmacion');
    const telefonoEmergenciaConfirmacion = document.getElementById('telefonoEmergenciaConfirmacion');

    nombreConfirmacion.textContent = datos.nombre;
    apellidoConfirmacion.textContent = datos.apellido;
    edadConfirmacion.textContent = datos.edad;
    sexoConfirmacion.textContent = datos.sexo;
    categoriaConfirmacion.textContent = datos.categoria;
    kilometrosConfirmacion.textContent = datos.kilometros;
    tipoSangreConfirmacion.textContent = datos.tipoSangre;
    obraSocialConfirmacion.textContent = datos.obraSocial;
    telefonoConfirmacion.textContent = datos.telefono;
    telefonoEmergenciaConfirmacion.textContent = datos.telefonoEmergencia;

    // Mostrar el div de confirmación
    confirmacionDiv.style.display = 'block';
  } catch (error) {
    console.error(error);
  }
}
/*
// Función asincrónica para enviar los datos por correo electrónico
async function enviarEmail() {
  try {
    // Aquí puedes implementar la lógica para enviar los datos por correo electrónico
    // Por ejemplo, utilizando una API de envío de correos electrónicos
    console.log('Datos enviados por correo electrónico');
  } catch (error) {
    console.error(error);
  }
}
*/
// Evento para enviar los datos y mostrar la confirmación
formulario.addEventListener('submit', async (event) => {
  event.preventDefault();
  await mostrarDatos();
});

// Función para borrar los datos del formulario
function borrarDatos() {
  nombreInput.value = '';
  apellidoInput.value = '';
  edadInput.value = '';
  sexoInput.value = '';
  categoriaInput.value = '';
  kilometrosInput.value = '';
  tipoSangreInput.value = '';
  obraSocialInput.value = '';
  telefonoInput.value = '';
  telefonoEmergenciaInput.value = '';

  // Ocultar el div de confirmación
  const confirmacionDiv = document.getElementById('confirmacion');
  confirmacionDiv.style.display = 'none';
}

// Evento para borrar los datos
const botonBorrar = document.getElementById('botonBorrar');
botonBorrar.addEventListener('click', borrarDatos);
