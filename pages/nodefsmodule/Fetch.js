import { useEffect, useState } from 'react';
import Items from './Items';
import {BsFillCartCheckFill} from 'react-icons/bs'
import Cartpage from './CartPage';

 const Fetch = () => {
  const[products, setProducts] = useState([]);
 

  useEffect(()=>{
    const productApi = async () => {
      let result = await fetch(`http://localhost:3000/api/hello`);
      let detail = await result.json();
      setProducts(detail);
    }
    productApi();
  }, []);
 return(
  <div>
    <nav style={{display: 'flex', justifyContent: 'center'}}>
      <h1 style={{ backgroundColor: 'aqua' }}>Shopping Buddy</h1>
      <BsFillCartCheckFill style={{ backgroundColor: 'aqua' }} />
    </nav>
    
    <div className='exp'>
      {
        products.map((cur, idx)=>(
            <Items
                key={idx} 
                id={cur.id}
                title={cur.title} 
                image={cur.image} 
                description={cur.description} 
                price={cur.price}
                quantity={cur.quantity}
            />
        ) )
      }
    </div>
    <Cartpage />
  </div>
 )
  
}


export default Fetch;

