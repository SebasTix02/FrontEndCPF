# AppGestionServicios

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.2.4.

## Servidor de Desarrollo

Ejecuta `ng serve` para iniciar el servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios en alguno de los archivos fuente.

## Generación de Código

Ejecuta `ng generate component nombre-del-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilación

Ejecuta `ng build` para compilar el proyecto. Los archivos generados serán almacenados en el directorio `dist/`.

## Ejecutando pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias mediante [Karma](https://karma-runner.github.io).

## Ejecutando pruebas de extremo a extremo

Ejecuta `ng e2e` para ejecutar las pruebas de extremo a extremo utilizando la plataforma de tu elección. Para usar este comando, primero debes agregar un paquete que implemente las capacidades de pruebas de extremo a extremo.

## Más ayuda

Para obtener más ayuda sobre el Angular CLI, usa `ng help` o visita la página de [Angular CLI Overview and Command Reference](https://angular.io/cli).

---

## Tema: Control de Inventario para una Empresa de Producción de Fideos

**Tecnologías Utilizadas:**
- **Framework:** Angular
- **Entorno de ejecución:** NodeJS
- **Base de Datos:** MariaDB
- **Lenguajes de Programación:** TypeScript, JavaScript
- **Frontend:** HTML, CSS, Bootstrap

### Funcionalidad Principal

El proyecto tiene como objetivo desarrollar un sistema de control de inventarios para una **empresa productora de fideos**. Permite gestionar tanto los productos recibidos como materia prima (harina y sal) como los productos terminados (espaguetis, macarrones, lazos).

### Funcionalidad Secundaria

Se desarrollará un módulo de acceso que permitirá ingresar a la aplicación tanto al bodeguero como al gerente de la empresa para controlar el inventario.

### Alcance

La aplicación se implementará en un **entorno local** dentro de las instalaciones de la empresa. La base de datos también será local, permitiendo generar análisis de los datos generados.

### Módulos a Desarrollar

1. **Módulo 1 - Login:** Un sistema de login que permitirá el acceso al **bodeguero** o **gerente** de la empresa para gestionar los productos.
   
2. **Módulo 2 - Materia Prima (CRUD):** Permite ingresar los datos de la materia prima recibida (código, valor, cantidad, proveedor).
   
3. **Módulo 3 - Productos Terminados (CRUD):** Permite ingresar los datos de los productos terminados (código, valor, cantidad).

Este proyecto proporcionará una solución completa para la gestión de inventarios en la empresa, asegurando un control adecuado tanto de los insumos como de los productos finales.
