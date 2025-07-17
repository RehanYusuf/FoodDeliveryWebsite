import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/Slice';

const Cart = () => {
  
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clicking = () => {
       dispatch(clearCart());
  }

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      {cartItems.length === 0 ? 
      <div>
        <h1 className='text-4xl my-16'>Oops!! Seems like you havent added any items in your cart!!</h1>
      </div>
       :
      <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 rounded-lg border bg-black text-white' onClick={clicking}>Clear Cart</button>
         <ItemList items={cartItems}/>
      </div>}
      
      
    </div>
  )
}

export default Cart