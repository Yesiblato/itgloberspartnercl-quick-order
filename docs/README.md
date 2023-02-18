# QUICK ORDER COMPONENT

Este es un componente personalizado que permite realizar una compra rápida ingresando el SKU de un producto de la tienda.

En este componente se trabajó con las siguientes tecnologías:

- Vtex.
- React.
- Graphql.
- Typescript.
- Css.

![Quick order desktop-README](https://user-images.githubusercontent.com/87024446/219821711-4fb00083-7abd-4d8d-9737-eeb8badfa373.png)

## Configuration 

### Paso 1 - Clonar

Realizar la clonación del siguiente repositorio:
- [Repositorio](https://github.com/Yesiblato/itgloberspartnercl-quick-order)

### Paso 2 - Editar el Manifest.json 

Ingresar al archivo manifest.json y realizar las siguentes modificaciones en: `vendor`, `name`, `version`, `title` y `description`
como se muestra en el siguiente ejemplo: 

```js
{
  "vendor": "itgloberspartnercl",
  "name": "quick-order",
  "version": "0.0.1",
  "title": "Quick Order",
  "description": "Input que permitirá una compra rápida en mi sitio VTEX IO"
}
```
Además, verifique que el archivo cuente con los siguientes builders: 

```js
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  }
```
### Paso 3 - Instalar node-modules

Para realizar esta instalación de node-modules, debe estar ubicado en la carpeta de `react` de la aplicación y ejecutar el comando `yarn`, y tendrá instaladas todas las dependencias necesarias para usar esta plantilla.

### Paso 4 - Ejecutar el preview

Despues de realizar los pasos anteriores puede verificar si su componente está funcionando ejecutando el comando `vtex link` si todo funciona correctamente deberá ver en consola `Sending locale change event`.

Si la consola muestra algún error, por favor verificar los pasos anteriores y vuelva a ejecutar `vtex link`.

### Paso 5 - Implementar el componente

Por último, para utilizar el componente debe agregarlo a las `dependencies` en el `manifest.json` de su tienda (store-theme) de la siguiente manera:

- vendor.name : version. 

Por ejemplo: 
```js
  "dependencies": {
     "itgloberspartnercl.quick-order": "0.x"
  }
```

## Dependencies

1. "vtex.css-handles": "0.x"
2. "vtex.checkout-graphql": "0.x",
3. "vtex.search-graphql": "0.x", 

## Contributors ✨

Yesica Johana Blanco Torregrosa
