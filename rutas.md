
**routes/index.js**
index.js (o main.js o principal.js) con las urls independientes, las que van por libre
GET /home
GET /contact
GET /info

**routes/clients.js**
X GET /clients (index.pug) - Recupera todos los clientes y me los muestra en una tabla
XX GET /clients/IDCLIENT - Recupera el cliente con el ID especificado
X GET /clients/new (form.pug) - Formulario para insertar un nuevo cliente
XX POST /clients/create - Gestiona la creación de un nuevo cliente 
                    // // este relacionado con el de arriba
GET /clients/edit/IDCLIENT - Formulario para editar un nuevo cliente (con los datos del cliente a editar)
XXX POST /clients/update - Gestiona la actualización de un cliente 
GET /clients/remove/IDCLIENT - Borrar un cliente //solo necesito pasarle el id así que puede ser un GET

**routes/teachers.js**
X GET /teachers (index.pug) - Recupera todos los profesores y me los muestra en una tabla
XX GET /teachers/IDTEACHER - Recupera el profesor con el ID especificado
X GET /teachers/new (form.pug) - Formulario para insertar un nuevo profesor
XX POST /teachers/create - Gestiona la creación de un nuevo profesor
                    // // este relacionado con el de arriba
GET /teachers/edit/IDTEACHER - Formulario para editar un nuevo profesor (con los datos del profesor a editar)
XXX POST /teachers/update - Gestiona la actualización de un profesor 
GET /teachers/remove/IDTEACHER - Borrar un profesor //solo necesito pasarle el id así que puede ser un GET

**API**
**(más sencillo) solo trabajamos con datos y se amplian las peticiones**
**MUY IMPORTANTE LOS VERBOS****porque tenemos las mismas urls o parecidas**

**routes/api/clients.js** **esta seria la documentación de mi API**
X GET /api/clients - recuperar todos los datos de los clientes
X POST /api/clients - Crear un nuevo cliente. Los datos del nuevo cliente vendrán en el BODY!!
X PUT /api/clients - Edita un cliente. los datos del cliente a editar vendrán en el BODY!
X DELETE /api/clients/IDCLIENTE - Elimina un cliente

**routes/api/teachers.js** **esta seria la documentación de mi API**
X GET /api/teachers - recuperar todos los datos de los profesores
X POST /api/teachers - Crear un nuevo profesor. Los datos del nuevo profesor vendrán en el BODY!!
X PUT /api/teachers - Edita un profesor. los datos del profesor a editar vendrán en el BODY!
X DELETE /api/teachers/IDTEACHER - Elimina un profesor

** **

CRUD - Create, Read, Update, Delete

**routes/class.js**
GET /class (index.pug) - Recupera todas las clases disponibles
GET /class/323 - Recupera la clase con ese ID
GET /class/new (formulario.pug) - Formulario para insertar una nueva clase
GET /class/edit - Formulario para editar una clase
GET /class/remove - Borrar una clase

**routes/test.js**
GET /test - Pruebas sobre MongoDB
