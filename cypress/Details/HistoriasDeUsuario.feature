#Usuario registrado
Feature: Recuperación de contraseña
  Scenario: Solicitar restablecimiento
    Given que estoy en la página de login
    When selecciono "Olvidé mi contraseña"
    And ingreso mi correo
    Then recibo un enlace para restablecer mi contraseña

#Criterios de aceptación
#Debe mostrar el icono cambiado al estado “guardado”.
#Debe sincronizar la lista con la cuenta del usuario.
#Debe permitir remover productos de favoritos.


#Usuario registrado
Feature: Favoritos
  Scenario: Agregar a favoritos
    Given que estoy en la página de un producto
    When hago clic en el icono de "Favorito"
    Then el producto se agrega a mi lista de favoritos

#Criterios de aceptación
#Debe mostrar fecha, monto y estado del pedido.
#Debe permitir visualizar detalles completos.
#Debe permitir descargar factura (si aplica).


#Usuario registrado
Feature: Historial de pedidos
  Scenario: Visualizar historial
    Given que estoy en mi cuenta
    When accedo a la sección "Mis pedidos"
    Then veo una lista con mis órdenes anteriores

#Criterios de aceptación
#Debe mostrar fecha, monto y estado del pedido.
#Debe permitir visualizar detalles completos.
#Debe permitir descargar factura (si aplica).


#Administrador
Feature: Gestión de stock
  Scenario: Actualizar stock
    Given que estoy en el panel de administración
    When edito la cantidad de stock de un producto
    And guardo los cambios
    Then el sistema actualiza el stock correctamente

#Criterios de aceptación
#Debe validar valores numéricos.
#Debe mostrar cambios de forma inmediata en la tienda.
#Debe mostrar logs de modificación.


#Administrador
Feature: Gestión de usuarios
  Scenario: Editar estado de usuario
    Given que estoy en el panel administrativo
    When cambio el estado de un usuario (activo/inactivo)
    Then el sistema aplica el cambio correctamente

#Criterios de aceptación
#Debe permitir activar y desactivar cuentas.
#Debe registrar auditoría de cambios.
#Debe informar al usuario si su cuenta fue deshabilitada.


#Administrador
Feature: Categorías
  Scenario: Crear categoría
    Given que estoy en la sección de categorías
    When creo una nueva categoría y la guardo
    Then aparece en el listado de categorías disponibles

#Criterios de aceptación
#Debe evitar categorías duplicadas.
#Debe permitir editar y eliminar categorías.
#Debe actualizar el menú de navegación.


#Cliente registrado
Feature: Reseñas
  Scenario: Publicar reseña
    Given que compré un producto
    When escribo una reseña y la envío
    Then se publica en la sección de opiniones del producto

#Criterios de aceptación
#Debe permitir calificación (1–5 estrellas).
#Debe permitir editar o eliminar reseña.
#Solo compradores verificados pueden reseñar.


#Usuario visitante
Feature: Registro de usuario
  Como visitante
  Quiero registrarme en la plataforma
  Para poder acceder a funcionalidades personalizadas

  Scenario: Registro exitoso
    Given que estoy en la página de registro
    When ingreso un correo válido
    And ingreso una contraseña válida
    And confirmo la contraseña
    And presiono el botón "Crear cuenta"
    Then veo un mensaje de confirmación de registro
    And soy redirigido al dashboard de usuario

#Criterios de aceptación
#Debe validar correo en formato correcto.
#La contraseña debe tener mínimo 8 caracteres.
#Las contraseñas deben coincidir.
#Debe enviarse correo de verificación (si aplica).
#El sistema debe redirigir al dashboard tras registrarse.


#Usuario registrado
Feature: Inicio de sesión
  Como usuario registrado
  Quiero iniciar sesión
  Para acceder a mi cuenta

  Scenario: Inicio de sesión exitoso
    Given que estoy en la página de login
    When ingreso mi correo registrado
    And ingreso mi contraseña correcta
    And doy clic en "Iniciar sesión"
    Then accedo a mi cuenta
    And veo mi panel de usuario

#Criterios de aceptación
#El usuario debe ingresar correo y contraseña válidos.
#Mostrar mensajes claros en caso de error.
#Debe haber opción "Recuperar contraseña".
#Sesión debe mantenerse activa según políticas.


#Usuario registrado o visitante
Feature: Carrito de compras
  Como usuario
  Quiero agregar productos al carrito
  Para poder comprarlos

  Scenario: Agregar un producto al carrito
    Given que estoy viendo la página de un producto
    When hago clic en el botón "Agregar al carrito"
    Then el producto aparece en mi carrito
    And el ícono del carrito muestra el número de productos actualizado


#Criterios de aceptación
#El carrito debe actualizar la cantidad.
#El usuario debe ver notificación de que el producto fue agregado.
#El producto debe permanecer en el carrito aun si el usuario navega a otra página.


#Usuario registrado
Feature: Checkout
  Como cliente
  Quiero procesar mi compra
  Para recibir mis productos

  Scenario: Compra exitosa
    Given que tengo productos en el carrito
    And estoy en la página de checkout
    When ingreso mis datos de envío
    And selecciono el método de pago
    And confirmo la compra
    Then veo un mensaje de "Compra realizada exitosamente"
    And recibo un resumen del pedido


#Criterios de aceptación
#Debe validar datos de envío.
#Debe permitir elegir método de pago.
#Debe generar un número de orden.
#Debe enviarse correo con confirmación de compra.


#Visitante o usuario registrado
Feature: Búsqueda de productos
  Como usuario
  Quiero buscar productos por nombre o categoría
  Para encontrarlos fácilmente

  Scenario: Búsqueda por nombre
    Given que estoy en la página principal
    When escribo un término válido en la barra de búsqueda
    And presiono Enter
    Then se muestran productos relacionados con mi búsqueda


#Criterios de aceptación
#Debe mostrar resultados relevantes.
#Debe mostrar mensaje si no hay coincidencias.
#Debe permitir filtros (precio, categoría, stock).