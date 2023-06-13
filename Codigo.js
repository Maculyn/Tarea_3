document.getElementById(aaaBTN).addEventListener('click', CargarArchivos);

// Obtener listado de contactos mediante GET

function CargarArchivos () {
fetch('http://www.raydelto.org/agenda.php')
  .then(response => response.json())
  .then(data => {
    console.log('Listado de contactos:', data);
  })
  .catch(error => {
    console.error('Error al obtener el listado de contactos:', error);
  });
}


