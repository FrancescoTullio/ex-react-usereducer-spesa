import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AppProduct from './componetn/AppProduct'
import AppList from './componetn/AppList'
import AppTotal from './componetn/AppTotal'

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([])

  const updateProductQuantity = (elem) => {

    const newQuantity = elem.quantity + 1

    return newQuantity
  }

  const addToCart = (elem) => {

    if (addedProducts.some(curElem => curElem.name === elem.name)) {

      const updateItem = addedProducts.find(curElem => curElem.name === elem.name)
      const newQuantity = updateProductQuantity(updateItem)

      // const newObjQuantity ={
      //   ...elem,
      //   quantity: newQuantity
      // }

      let indexToChange = null

      addedProducts.forEach((curElem, index) => {
        if (curElem.name === elem.name) {
          indexToChange = index
        }
      })

      const newArray = [...addedProducts]

      // newArray.splice(indexToChange, 1, newObjQuantity)
      newArray[indexToChange].quantity = newQuantity

      setAddedProducts(newArray)

    } else {
      const newObj = { ...elem, quantity: 1 }

      setAddedProducts(prev => [...prev, newObj])
    }


  }

  const removeFromCart = (elem) => {
    if (addedProducts.some(curElem => curElem.name === elem.name)) {
      let indexToChange = null

      addedProducts.forEach((curElem, index) => {
        if (curElem.name === elem.name) {
          indexToChange = index
        }
      })
      const newArray = [...addedProducts]
      if (addedProducts[indexToChange].quantity > 1) {
        newArray[indexToChange].quantity = newArray[indexToChange].quantity - 1
      } else if (addedProducts[indexToChange].quantity === 1) {
        newArray.splice(indexToChange, 1)
      }
      setAddedProducts(newArray)

    } else {
      console.log("non puoi togliere cio che non c'è");

    }

  }

  return (
    <>
      <div className="container">
        <h1>hello</h1>
        <AppProduct products={products} hendleAdd={addToCart} hendleRemuve={removeFromCart} />
        <AppList list={addedProducts} />
        <AppTotal list={addedProducts}/>
      </div>
    </>
  )
}

export default App
