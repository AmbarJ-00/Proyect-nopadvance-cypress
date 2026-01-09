# **plan de pruebas**      

## **Objetivos**
Crear un framework de automatización de pruebas con Cypress que permita validar de manera rápida, eficiente y mantenible las funcionalidades críticas de una aplicación web, aplicando buenas prácticas de QA Automation y promoviendo un entorno escalable para futuras integraciones.

## **Descripción** 
Este framework está desarrollado con Cypress y tiene como propósito automatizar casos de prueba funcionales de una aplicación web, asegurando una validación continua y confiable del comportamiento del sistema.

Incluye una estructura organizada basada en buenas prácticas, uso del patrón Page Object Model (POM), comandos personalizados, fixtures para datos de prueba, reportería automatizada y ejecución paralela. Además, incorpora scripts para integrar las pruebas con CI/CD, facilitando su ejecución automática en cada cambio del proyecto.

El framework está diseñado para ser escalable, fácil de mantener y adaptable a diferentes entornos, permitiendo agregar nuevos módulos y pruebas sin comprometer la estabilidad del sistema.

## **Scope**
### **Dentro del alcance**
* Modulo de seleccion de productos.
* Modulo de procesamiento de pagos.
* Modulo de verificacion de productos.
* Modulo de recuperacion de contraña.
* Modulo de gestion de cuenta.
* Informaciones relacionadas a productos.
* Modulo de asistencia al usuario.
* Modulo de calificacion de productos y comentarios.
* Modulos de foros.
* Filtros dispuestos en diferentes sitios de la web.
* Enlaces y redirecciones relacionadas.
* calculo de impuestos y montos.
* pasarelas de pago.
* Chat Bot.
* Evaluaciones funcionales.
* Manejo de cuenta y gestion de usuario.
* Registro de usuario.


### **Fuera del alcance**
* Verificacion de datos encripytados.
* Verificacion de modulos relacionados al admin.
* Verificacion de modulos de configuracion.
* Verificacion de modulos de definiciones.
* Verificacion de modulo de 
* Verificacion del modulo Términos y condiciones.
* Verificacion del modulo Acuerdo de licencia de usuario final (EULA).
* Verificacion del modulo política de privacidad.
* Modulo del manual de usuario.
* Modulo Sobre nosotros.
* Modulo de Career.
* Modulo de Servicios.
* Modulo de contratacion de un recurso.


## **Áreas por probar**
* Home page. 
* Login. 
* Registrer. 
* Shopping Car. 
* Chat Bot. 
* Order History.
* Contactos. 
* Sitemap.
* Solicitud de cotizacion. 
* Links de redireccionamiento a redes sociales. 
* HomeStore page. 
* Products. 
* Foros. 
* Themes. 
* Plugins. 

## **Criterios de aceptación** 
Al no tener un marco de guia, requerimientos ni estatutos concretos para evaluar la web, se crearan Historias de usuario en base al flujo de 3 usuarios simulados de prueba con los cuales se estara estructurando el data set en base a ddistintos roles y distintos usuarios.
Ademas, se estaran implementando DoD como un reemplazo de los criterior de aceptacion para llevar cierta trazabilidad entre los productos de trabajo, un minimo de entregables y un marco de referencia sobre las definiciones de terminacion de una tarea y ciclo de evaluacion de un modulo.

## **Tipos de prueba**
* Pruebas E2E.
* Pruebas de componentes.
* Pruebas de api.


## **Data set**
|Username|Gmail|Tipo de usuario|
|---|---|---|
|Fers46@||Fsan99@gmail.com|visitante|
|Paula123|MariaPP@gmail.com|visitante|
|MercedesVB|MerCar@gmail.com|usuario|
|Camaleon81|Albertico@gmail.com|usuario|
|Mati|MatiTest@gmail.com|usuario|

## **Usuarios**
- Visitante: usuario sin permisos ni registro en el sistema. puede interactuar libremente con el sistema, buscar productos y solicitar informacion pero no puede comprar productos ni personalizar su perfil. 

- Usuario: usuario registrado en el sistema con permisos y autenticacion establecidos, puede procesar pagos, adquirir productos y servicios, personalizar su cuenta y tiene acceso a funciones mas especificas del sistema.

## **flujo de E2E**


## **Recursos y documentos relacionados** 
|||--s-|
|---|---|---|
|sc|cs|ds|
|-d-|-vv|-ff|
|-d-|-d-|-d-|
