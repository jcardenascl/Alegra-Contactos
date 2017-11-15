Alegra-Contactos
==============

CRUD de contactos realizada en Ionic v1 para Alegra, la App se conecta a la API pubico de [Alegra](https://developer.alegra.com/). 

## Pautas realizadas.
  - Listar Contactos.
  - Scroll infinito, busqueda y recarga. (pull to refresh).
  - Crear contacto, ignorando los campos  “ignoreRepeated”,“priceList”, “seller”, “term”, ni “internalContacts”.
  - Vista para los detalles de un contacto.
  - Borra el contacto en la API.
  - No se realizó la funcion de edicion por peticion de Alegra.
  
### *Se creó una directiva y controlador para la lista de contactos.

## Uso.
Pasos para instalar el proyecto:

```bash
git clone https://github.com/jcardenascl/Alegra-Contactos.git
```

Instalar las dependencias:

```bash
$ npm install
```

Iniciar el servidor:

```bash
$ ionic serve
```

Para conectarse a la API se debe crear un provider del tipo "value" llamado "ApiConnect" con los valores: 
- email
- token


### Por ejemplo

```sh
myApp.value('ApiConnect', {
  'email' : 'xxxxxxxx@xxx.xxx',
  'token' : 'xxxxxxxxxxxxxxxxx'
});
```