import React from 'react'
import { Link } from 'react-router-dom';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
  const[{ basket,user }, dispatch] = useStateValue();
    
  return (
    <div className="checkout">
        <div className="checkout__left">
          <Link to='/login'>
          <img 
          className='checkout_ad' src="https://authindia.com/wp-content/uploads/2019/10/Authindia_Banner-3-800x197.png"

          alt=""
          />
          </Link>
          <img 
          className='checkout_ad2' src="https://st2.depositphotos.com/1031343/5529/v/950/depositphotos_55294069-stock-illustration-sale-50-off-banner-design.jpg"
          
          alt=""
          />
          
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your Basket
            </h2>
            {basket.map(item =>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}/>
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />

        </div>
    </div>
  )
}

export default Checkout;