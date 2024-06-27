Code explanation.

You can preview the design in: https://main--prueba-tecnica-addcomm.netlify.app/

SPANISH:

 En primer lugar, comentar como está estructurado mi sitio y librerías.

 Para estructurar el código he decidido hacer un archivo js y css por cada componente/apartado del diseño: Overview, Status y Batches.Adicional, he creado un archivo js para el código js genérico y otro con la definición del datasheet. Generalmente utilizo un automatizador de tareas como gulp/grunt para reutilización de código, pero al ser un proyecto pequeño lo he hecho directamente de forma algo más tradicional, con carpetas para el css, el js y las imágenes. No he incluido archivos de fuentes, a pesar de ser mejor práctica, por simplificar he tirado de importación de las fuentes Open Sans y Montserrat que son las que he podido ver en el diseño de Figma.
He incluido además el framework de Bootstrap para el diseño del campo de formulario.

 -Mi site quedaría de la siguiente forma:
 Carpeta css: 
   - batches.css - hoja de estilos para el apartado de batches.
   - bootstrap.css - hoja de estilos para bootstrap.
   - bootstrap.min.css 
   - general.css - hoja de estilos para componentes generales, por ejemplo el body o el contenedor principal.
   - inputGroup.css - hoja de estilos para el componente de dropdown.
   - overviewDetails.css - hoja de estilos para el componente overview.
   - pie.css - hoja de estilos para el componente del gráfico.
Carpeta js: de forma similar a la de css, nos encontramos lo siguiente:
    - batches.js, overviewData.js, pieChart.js: scripts javascripts para los componentes principales. Manejan los datos aportados en el datasheet y los presentan por pantalla.
     - scripts.js: scripts generales, cargan la inicialización de los otros componentes.
     - datasheet.js: script que inicializa la variable de data, imprescindible para completar la tabla de datos.
  Carpeta imágenes:
    - Hay están subidos los iconos en formato svg descargados en Figma.
El funcionamiento de la maquetación es el siguiente:
En primer lugar, se cargarán los datos enviados con el id(fecha) que deseemos. He decidido por defecto que sean los primeros que se reciban por la hoja de datos, para no complicarme. Comentar que esta data he decidido ponerla en formato JSON, que es la forma estándar que posiblemente se recibirán del webservice correspondiente. Solamente un comentario, se que en el diseño se ven muchos más datos en la tabla de Batches, pero por simplificación simplemente he cogido unos cuantos al azar y los he dividido en las dos vistas que he hecho, creo que con dos fechas por cada tanda de resultados es más que suficiente para comprobar que efectivamente estamos cargando y actualizando bien los datos en el HTML.
**var dataSheetChart = {
    "date1":{
      'name':'Last 7 days',
      'value':'date1',
      'sms':[
            {"name":"Running", "qty":"3229"},
            {"name":"Success", "qty":"456"},
            {"name":"Scheduled", "qty":"32"},
            {"name":"Error", "qty":"3"}
        ],
        'overviewDataChart': [
            {'name':'Emails', 'icon':'email.svg','qty':'50', 'status':'positive', 'percent':'13%'},
            {'name':'SMS', 'icon':'sms.svg','qty':'256', 'status':'negative', 'percent':'13%'},
            {'name':'Prints', 'icon':'printer.svg','qty':'396', 'status':'positive', 'percent':'13%'}
        ],
        'batchesDataChart':[
            {'name':'Alpha_Genesis', 'id':'37291856','status':'PROCESSING', 'processed':'103', 'total':'9500'},
            {'name':'Prime_Apex', 'id':'48562739','status':'FINISHED', 'processed':'485', 'total':'9340'},
            {'name':'Genesis_Zenith', 'id':'92743108','status':'PROCESSING', 'processed':'372', 'total':'6800'}
        ]
    },**

Luego los diferentes scripts de creación agregarán estos datos en los huecos correspondientes dentro del html.

En segundo lugar, el botón de Filter está por defecto inhabilitado. Esto es un extra que he introducido a fin de posibilitar que solamente se carguen datos nuevos cuando haya cambios en el dropdown o se eliminen los datos con el botón clear.

Luego, al lado del botón de Filter, se sitúa el de clear, que elimina automáticamente los datos de la tabla y habilita automáticamente el botón de Filter en caso de que estuviera inhabilitado.

Ese sería el funcionamiento principal solicitado. Adicional, he decidido añadir funciones de animación extras en la carga del anillo de datos como una animación de incremento donde aparecen cifras totales. También he visto en el Figma que había algún tipo de funcionalidad cuando se hacía hover en la parte de batches que aparecía el icono de clipboard, con lo que le añadido está funcionalidad y además al hacer click copia al clipboard la data presente en la fila correspondiente.

Como he comentado al inicio, he compilado el código con la app de Netlify, para que se pueda ver el comportamiento en vivo del mismo:
https://prueba-tecnica-addcomm.netlify.app/


ENGLISH

First of all, I want to comment how my site and libraries are structured.

To structure the code I have decided to make a js and css file for each component/section of the design: Overview, Status and Batches, I have also created a js file for the generic js code and another one with the datasheet definition. I usually use a task automator like gulp/grunt for code reuse, but being a small project I have done it directly in a more traditional way, with folders for the css, js and images. I have not included font files, despite being best practice, for simplicity I have imported Open Sans and Montserrat fonts that are the ones I have seen in the design of Figma.
I have also included the Bootstrap framework for the design of the form field.

 -My site structure:
 Folder css: 
   - batches.css - stylesheet for the batches section.
   - bootstrap.css - stylesheet for bootstrap.
   - bootstrap.min.css 
   - general.css - stylesheet for general components, e.g. the body or the main container.
   - inputGroup.css - stylesheet for the dropdown component.
   - overviewDetails.css - stylesheet for the overview component.
   - footer.css - stylesheet for the chart component.
js folder: similar to css, we find the following:
    - batches.js, overviewData.js, pieChart.js - javascripts for the main components. They handle the data provided in the datasheet and display them on the screen.
     - scripts.js: general scripts, they load the initialization of the other components.
     - datasheet.js: script that initializes the data variable, essential to complete the data table.
Image folder: 
There I uploaded the icons from the Figma.

The way the layout works is as follows:
First, the data sent with the id(date) we want will be loaded. I have decided by default that they are the first to be received by the datasheet, to avoid complications. To comment that this data I have decided to put it in JSON format, that is the standard form that possibly will be received of the corresponding webservice. Only a comment, I know that in the design many more data are seen in the Batches table, but for simplification I have simply taken a few at random and I have divided them in the two views that I have done, I believe that with two dates for each batch of results is more than enough to verify that indeed we are loading and updating well the data in the HTML.

Then the different creation scripts will add this data in the corresponding holes inside the html.

Secondly, the Filter button is disabled by default. This is an extra that I have introduced in order to make it possible to only load new data when there are changes in the dropdown or delete data with the clear button.

Then, next to the Filter button, the clear button is placed, which automatically deletes the data from the table and automatically enables the Filter button in case it is disabled.
That would be the main functionality requested. Additionally, I have decided to add extra animation functions in the loading of the data ring and an increment animation where total figures appear. I have also seen in Figma that there was some kind of functionality when hovering in the batches part that the clipboard icon appeared, so I added this functionality and also when clicking on it, it copies to the clipboard the data present in the corresponding row.

As I have commented at the beginning, I have compiled the code with the Netlify app, so that the live behavior of the same one can be seen:
https://prueba-tecnica-addcomm.netlify.app/


