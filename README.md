Aplicación de prueba para frontend developer en MercadoLibre

## frontend-app

Aplicación realizada con React, create react app, desplegada en netlify.

He realizado una arquitectura que busca tener bastante organización desde cada componente hasta los assets de la aplicación, la organización me parece importante pensando en un proyecto que se busca crezca en el tiempo.

En **Components/**, incluso cada uno de los componentes que serán reutilizables en la aplicación.

En **hooks/** algunos hooks como ejemplo de los que se pueden utilizar, (se pueden optimizar mucho más)

En **images/** una organización que busca separar los assets estaticos de los de diseño, allí encontramos carpetas importantes como **bg** **icons** **illustrations** **logos** y **misc**

En **pages/** he organizado las páginas de la aplicación, **Home** **NotFound** **ProductDetail** **Results**

Para los estilos, he organizado todo en **scss/**, manejando arquitectura **ITCSS**,

- **settings/** se organizan todas las variables para reutilizar a lo largo de todo el proyecto en cuanto a estilos
- **tools/** Organizo mixins y funciones que son útiles para el manejo de spacing classes, breakpoints, grid y containers.
- **generic/** Organizo la limpieza o normalización de elementos, a pesar de basarse en normalize, de ser necesario se modifica para ajustarlo según al proyecto (y no al framerowk)
- **elements/** Allí divido los elementos HTML, que necesite estandarizar para la aplicación, la diferencia del normalize, es que estos no buscan normalizar el navegador, sino aplicarse estilos según la guía de estilo
- **components/** en components coloco cada uno de los componentes de la aplicación, estos son independientes unos de otros.
- **utilities/** Creo documentos des estilo donde según su categoría organizo clases que puedan llegar a ser útiles en el desarrollo, clases de espaciado, tipografía, display o borders.

En **services/** he creado un pequeño servicio de ejemplo de api con axios, este es un ejmplo como implementar el requerimiento sin crear un api, aún así en **backend-app** he llegado a agregar una implementación del api de ML que ha sido desarrollada por **frenddyalexis**

En **tests** he creado ejemplos de test/snapshots de algunos componetnes
