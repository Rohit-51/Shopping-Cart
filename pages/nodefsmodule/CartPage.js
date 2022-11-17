import React, {useState, useContext, useEffect} from 'react';
import { CartContext } from '../../components/store/CartContext';
import Items from "./Items";

const CartPage = () => {
  const {cart} = useContext(CartContext);
  // let Item = {cart}
  const[total, setTotal]=useState();
  const[itemQuantity, setItemQuantity]=useState();
    // console.log('>>>', cart)
    console.log(':>>>>', cart)
   
    
    useEffect(()=>{
      setTotal(cart.reduce((acc, curr)=> acc + curr.price,0).toFixed(2))
    },[cart]);

    useEffect(()=>{
      if(cart.length > 0){
        setItemQuantity(cart.reduce((qun, item)=>{
          qun + item.quantity;
        },0)
        )
      }else{
        setItemQuantity(0)
      }
    }, [cart]);

  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{backgroundColor: 'aqua', borderRadius: '5px'}}>Items in cart</h1>
      <span style={{fontSize: '20px', fontWeight: 'bold'}}>Total: {total}</span><br/>
        <span>Total Items: {itemQuantity}</span>

        {cart.map((prod, idx)=>(
          <Items
            key={idx} 
            id={prod.id}            
            title={prod.title} 
            image={prod.image}
            price={prod.price}
          />
        ))}
    </div>
  )
}

export default CartPage;
