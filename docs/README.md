# QUICK ORDER COMPONENT

This is a custom component that allows you to make a quick purchase by entering the SKU of a store product.

In this component we worked with the following technologies:

- Vtex.
- React.
- Graphql.
- Typescript.
- Css.

## Component's image.

![Quick order desktop-README](https://user-images.githubusercontent.com/87024446/219821711-4fb00083-7abd-4d8d-9737-eeb8badfa373.png)

## Configuration 

## Step 1 - Clone.

Realizar la clonación del siguiente repositorio:
- [Repository](https://github.com/Yesiblato/itgloberspartnercl-quick-order)

## Step 2 - Edit the Manifest.json.

Enter the manifest.json file and make the following changes to: `vendor`, `name`, `version`, `title` and `description`
as shown in the following example:

```js
{
  "vendor": "itgloberspartnercl",
  "name": "quick-order",
  "version": "0.0.1",
  "title": "Quick Order",
  "description": "Input que permitirá una compra rápida en mi sitio VTEX IO"
}
```
Also, check that the file has the following builders and the dependencies:

```js
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  }
```

### Dependencies.

1. "vtex.css-handles": "0.x"
2. "vtex.checkout-graphql": "0.x",
3. "vtex.search-graphql": "0.x", 


## Step 3 - Install node-modules.

To carry out this installation of Node-Modules, it must be located in the `react` folder of the application and execute the `yarn` command, and will have all the necessary units to use this template installed.

## Step 4 - Execute the preview.

After performing the previous steps you can verify if its component is running by running the `Vtex Link` command if everything works correctly should see in` Sending locale change event`.

If the console shows any error, please verify the previous steps and re -execute `vtex link`.

## Step 5 - Deploy the component

Finally, to use the component you must add it to the `dependencies` in the `manifest.json` of your store (store-theme) as follows:

- vendor.name : version. 

For example:
```js
  "dependencies": {
     "itgloberspartnercl.quick-order": "0.x"
  }
```
### We call it in the store theme in a flex layout to see it.
```js
  "flex-layout.col#container__samSmith": {
    "title": "container__samSmith--col",
    "children": [
      "quick-order"
    ]
  }
```

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on 

| CSS Handles |
| ----------- | 
| `containerPrincipal__quickOrder` | 
| `container__quickOrder` | 
| `title__quickOrder` | 
| `label__quickOrder` | 
| `inputSku__quickOrder` |
| `"inputSubmit__quickOrder"` | 
| `options__quickOrder` |


## Contributors ✨

Yesica Johana Blanco Torregrosa
