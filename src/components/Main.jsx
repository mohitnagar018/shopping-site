import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import './Main.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'

function Main() {
  const [myData, setMyData] = useState([])
  const dispatch = useDispatch()
  const [fildata, setFilData] = useState([])

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))

  };

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        setMyData(res.data.products)
        setFilData(res.data.products)
      })


  }, []);

  const filterdata = (e) => {
    setFilData(myData.filter(f => f.title.toLowerCase().includes(e.target.value)))
  }


  return (
    <>
      <div className="searchbar">
        <h2 className="text-center" >
          Shopping Now </h2>
        <input type='text' placeholder='search product' onChange={filterdata}></input>
      </div>



      
      
      
      
      
      
      
      
      
      <div className="row d-flex justify-content-center align-items-center">

        {fildata.map((item) => {

          return (
            <>

              <div className="card" key={item.id} >

                <img src={item.thumbnail} className="card-img-top" alt="IMG" />
                <div className="card-body">
                  <h5 className="card-title" >{item.title}</h5>
                  <li className="list-group-item" >Price:${item.price}</li>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item cat" >Category:{item.category}</li>
                  <li className="list-group-item rating" >Rating:{item.rating}</li>
                  <li className="list-group-item disc"  >Discount:{item.discountPercentage}%</li>


                </ul>
                <div className="card-body">
                  <button type="button" class=" btn-warning"
                    onClick={() => handleAddToCart(item)}><AddIcon /> Add Cart</button>

                </div>
              </div>


            </>)
        })}
      </div>

    </>
  )
}

export default Main;










