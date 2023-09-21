# Tp3Api

Aplicacion realizada en Angular 15, con backend Springboot.

Estructurado en paginas,

por las cuales se puede navegar a traves de los iconos en el navbar.

* Home: pagina donde se listan los empleados, jornadas y conceptos(siempre que haya creadas).
  

* Lista de empleados: Al hacer click en cualquier empleado lo llevara a su card, donde podra eliminarlo o editartarlo. (Funcionalidad que se repite en el menu)

  Ademas podra ver las jornadas relacionadas al empleado y agregar mas de ser requerido.

  Las demas listas son solo informativas.

  

* /empleado: Encontrara el formulario para crear un nuevo usario, se accede con el icono, en el navbar. Implementa todas las validaciones que se requirieron en el backend.

  
  
* /empleado/id: Detalles del empleado, se puede acceder haciendo click al usuario en la lista de home.

  

* jornadas:  Formulario para crear una nueva jornada, con todas las validaciones Implementa todas las validaciones que se requirieron en el backend.

  

* /jornada/id:  Se accede desde la card del empleado y el /id pertece al empleado. Esto permite evitar se ponga el Id que puede no conocerse.

  existe una validacion extra, que no dejara borrar un empleado que tenga relacion con una jornada.

  dialogo de confirmacion para borrar empleado (Esta logica se me complico un poco y se detalla en el servicio src>app>services>dialogos>dialogos.service). Funciona mejor dentro de la card del empleado.

  Me esforce mucho en mantener un flujo de trabajo limpio con git, con las recomendaciones dadas en el lab **ver historial de commits en rama developtmen**

# Backend

Del lado del backend hice pocas modificaciones, las siguientes:

Cree existsEmail y nroDocumento, para recibir en tiempo real la validacion de ambos campos en el formulario de creacion

ademas agregue @CrossOrigin(origins = "http://localhost:4200") a todos los controladores, por el error de CORS.














