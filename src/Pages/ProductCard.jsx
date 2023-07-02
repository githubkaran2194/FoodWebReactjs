import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = (props) => {
  const { addItem } = useCart();

  const addtocart = () => toast("Item added to cart")

  return (
    <>
     <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">

   
            <div className="card products p-0 overflow-hidden h-100 shadow" style={{ width: "18rem;" }}>
              <img src={props.image_url} alt="Card image cap" className='card-img-top ' height={250}/>
              <div className="card-body">
                <h5 className="card-name">{props.name}</h5>
                <p className="card-desc">{props.description}</p>
                <p className="card-ingredients "><strong>Ingredients</strong>: {props.ingredients}</p>
                <p className='card-nutrition'>calories : {props.calories}</p>
                <p className='card-nutrition'>fat : {props.fat}</p>
                <p className="card-price">$ {props.price}</p>
                <div>
                  
                
                    <button onClick={addtocart} className="border-0">
                    <Link to="#" onClick={() => addItem(props.item)} className="btn btn-primary">Add To Cart</Link>
                    <ToastContainer
                      position="bottom-right"
                      autoClose={4000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"
                    />
                  </button>
                </div>

                <div>
                </div>
                </div>
              </div>
            </div>
        


    </>
  )
}

export default Product
