import React, { useState, useEffect } from 'react'
import { useMutation, useLazyQuery } from 'react-apollo';
import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql'
import { useCssHandles } from 'vtex.css-handles';
import "./styles.css"


const QuickOrder = () => {

  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("");
  const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT)
  const [addToCart] = useMutation(UPDATE_CART)

  const handleChange = (event:any) => {
    setInputText(event.target.value)
    console.log("input change", inputText)
  }

  const CSS_HANDLES = [
    "containerPrincipal__quickOrder",
    "container__quickOrder",
    "title__quickOrder",
    "label__quickOrder",
    "inputSku__quickOrder",
    "inputSubmit__quickOrder",
    "options__quickOrder"
    // "options__department",
    // "container__items"
  ]
  const handles = useCssHandles(CSS_HANDLES)

  useEffect(() => {
    console.log("El resultado de mi producto es: ", product, search)
    if(product) {
      let skuId = parseInt(inputText)
      console.log("Mis datos necesarios: ", skuId, product)
      addToCart ({
        variables: {
          saleChannel: "1",
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: "1"
            }
          ]
        }
      })
      .then (() => {
        window.location.href = "/checkout"
      })
    }

  }, [product, search])

  const addProductToCart = () => {
    getProductData ({
      variables:{
        sku: inputText
      }
    })

  }

  const searchProduct = (event:any) => {
    event.preventDefault();
    if (!inputText){
      alert("Debes ingresar un SKU")
    } else {
      console.log("Al final estamos buscando", inputText);
      setSearch(inputText)
      addProductToCart()
    }
  }

  return (
    <div className={handles.containerPrincipal__quickOrder}>
      <div className={handles.container__quickOrder}>
        <h2 className={handles.title__quickOrder}>Compra rápida de VTEX IO</h2>
        <form onSubmit={searchProduct}>
          <div className={handles.options__quickOrder}>
            <label className={handles.label__quickOrder} htmlFor='sku'>Ingresa el número de SKU</label>
            <input className={handles.inputSku__quickOrder} id="sku" type='text' onChange={handleChange}></input>
            <input className={handles.inputSubmit__quickOrder} placeholder='Número de SKU' type='submit' value="AÑADIR AL CARRITO" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default QuickOrder
