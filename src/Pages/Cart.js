import React from 'react'
import { ToastContainer } from 'react-bootstrap';
import {useCart} from 'react-use-cart'
const Cart = () => {
  const  {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  }= useCart();


  const toast=()=>toast("Remove Item")

  if(isEmpty) return <h1 className='text-center mt-4'>Your Cart is Empty</h1>
  return (
    <div className='container'>
       <h5 className='mt-4'>Cart ( {totalUniqueItems}) Total Items : ({totalItems})</h5>
       <table className='table table-light table-hover m-0'>
      {
        items.map((item, index)=>{
return (  
  <tr key={index}>
    <td>
      <img src={item.image_url} width={200} height={150} />
    </td>
    <td>{item.name}</td>
    <td>$ {item.price}</td>
    <td>Quantity ({item.quantity})</td>
    <td>
      <button className='btn btn-danger ms-2'
       onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}
  >-</button>
      <button className='btn btn-danger  ms-2'
        onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}
      >+</button>
      <button className='btn btn-info  ms-2'
        onClick={()=>removeItem(item.id)}
      >Remove items      
      </button>
     
    </td>
  </tr>
)
        })
      }
       </table>
       <hr/>
       <div className="mb-5">
       <h2>Total price : {cartTotal}</h2>
       <button
       onClick={() => emptyCart()}
       className="btn btn-primary ">Clear cart</button>
  &nbsp;
  &nbsp;
     <button className='btn btn-danger'>Buy</button>
       </div>
    </div>
  )
}

export default Cart