# Seccion para guardar los bugs de la pagina

## Perfil

El perfil puede ser accedido aunque el usuario no haya iniciado sesion.

Posiblemente causando que si intenta actualizar su nombre o foto de perfil haya algun error en tiempo de ejecucion.

#### Soluciones:

- Proteger la ruta para que solo pueda acceder alguien con una sesion iniciada.

## Tables

Al recargar las tablas desde ahi mismo, te reenvia a la pagina de login.

#### Soluciones:

- Es posible que sea por que las variables que se almacenan localmente, se asignan despues de que se hace la revision de credenciales de las rutas privadas.

## Juego:

Los botones de las opciones de las preguntas se quedan con escala cuando se juega en mobil
