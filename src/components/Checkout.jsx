import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Checkout.css'
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '../features/cartSlice'

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }
  const handleCheckOut = () => {
    if (cart.cartItems.length < 2) {
      alert("please add more item for checkout")
    }
    else {
      alert("order placed succesfully")
    }
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  return (
    <div className='cart-container'>
      <h1 className='shoppiung'>Shopping Cart</h1>
      {cart.cartItems.length === 0 ? (
        <div className="car-empty">
          <p>your cart is empty</p>
          <div className="start-shopping">
            <Link to="/">
              <ArrowBackIcon className='back' />
              <span>Start shop now</span>
            </Link>
          </div>
        </div>

      ) : (<div>
        <div className="titles">
          <h3 className="product-title">Product</h3>
          <h3 className="price">Price</h3>
          <h3 className="Quantity">Quantity</h3>
          <h3 className="delete">delete</h3>
          <h3 className="total">Total</h3>
        </div>
        <div className="cart-items">
          {cart.cartItems?.map(cartItem => (
            <div className="cart-item" key={cartItem.id}>
              <div className="car-product">
                <img src={cartItem.thumbnail} alt={cartItem.title} />
                <div>
                  <h4 className='title'>{cartItem.title}</h4>
                  {/* <button className='removebtn' onClick={() => handleRemoveFromCart(cartItem)}><DeleteIcon /></button> */}
                </div>
              </div>
              <div className="cart-product-price">
                $:{cartItem.price}
              </div>
              <div className="cart-product-quantity">
                <button onClick={() => handleDecreaseCart(cartItem)}>
                  <RemoveCircleIcon className='cirbtn' />
                </button>
                <div className="count">{cartItem.cartQuantity}</div>
                <button onClick={() => handleIncreaseCart(cartItem)}><AddCircleIcon className='cirbtn' /></button>
              </div>
              <div className='remov-btn' onClick={() => handleRemoveFromCart(cartItem)} ><DeleteIcon /></div >
              <div className="cart-product-total-price">$:{cartItem.price * cartItem.cartQuantity}</div>


            </div>
          ))}
        </div>
        <div className="cart-summary">

          <div className="cart-checkout">
            <div className="subtotal">
              <span>Subtotal</span>
              <span className="amount">$:{cart.cartTotalAmount}</span>
            </div>

            <button type="button" class="btn btn-success" onClick={() => handleCheckOut()}>Order Now</button>
          </div>
        </div>
      </div>
      )};

    </div>
  )
}

export default Checkout