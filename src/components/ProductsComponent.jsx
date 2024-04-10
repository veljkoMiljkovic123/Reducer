import React, { useReducer } from 'react'
import { INITIAL_STATE, productsReducer } from '../store/productsReducer'

function ProductsComponent() {
    const[state,dispatch] = useReducer(productsReducer,INITIAL_STATE)

  return (
    <div>
        {state.products((el,i)=>{
            return <div key={index}>Card</div>
        })}
    </div>
  )
}

export default ProductsComponent