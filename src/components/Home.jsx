import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';


import './Home.css'



function Home() {

  return (
    <>
      <header>
        <h3><ShoppingBagIcon fontSize='large' />Shopping</h3>
        <nav>
          <a className='home-items'><Link to="/"><HomeIcon fontSize='large' />Home</Link></a>
          <Link to="/Checkout">
            <button className='cart-btn' >
              <ShoppingCartIcon /></button>
          </Link>
        </nav>



      </header>


    </>)

}

export default Home
