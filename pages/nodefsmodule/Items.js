import React, {useContext, useState} from 'react';
import { CartContext } from '../../components/store/CartContext';


export const Items = ({id, description, price, title, image }) => {
    const[shown, setShown] = useState(false)

    const {cart, setCart, cartHandler} = useContext(CartContext)
    const handleClick = () => {
        cartHandler({product_id: id,image, title, description, price});
    }
    
    // console.log("cart >>", cart)
    // console.log('Hello')
    return(
        <div className='det'>
            <img src={image} />
            <div>
                <h5>{title}</h5>
                <p
                    className={shown ? "" : "hide-content"}
                >
                    {description}
                </p>
                {!shown ? (
                    <span onClick={() => setShown(!shown)}>Show More</span>
                    ) : (
                    <span onClick={() => setShown(!shown)}>Show Less</span>
                )}
                <h3>Rs{price}</h3>
            </div>
            <button className='btn' onClick={handleClick}>Add</button>
            {/* {cart.includes(Items) ? (
                <button
                    className="add remove"
                    onClick={() => setCart(cart.filter((c) => c.id !== Items.id))}
                >
                    Remove
                </button>
                ) : (
                <button className="add" onClick={() => setCart([...cart, Items])}>
                    Add
                </button>
            )} */}
        </div>
    );
    
}

export default Items;







{/* {cart.includes(Items) ? (
<button
    className="add remove"
    onClick={() => setCart(cart.filter((c) => c.id !== Items.id))}
>
    Remove
</button>
) : (
<button className="add" onClick={() => setCart([...cart, Items])}>
    Add
</button>
)} */}