import React from 'react';
import Item from './Shop';
import img from '../img.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="container home">
                <div className="row">

                    <img src={img} alt="" className="col-xl-6" />
                    <div className="col-xl-6 text-center home-text ">
                        <h1>Be The Fastest In Delivery Your <br /> <span className='text-danger'>Food</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos unde corporis aliquid dignissimos fuga,
                            <br /> consequuntur harum molestias deleniti. Similique facilis enim quod ea eaque praesentium animi rerum repellendus blanditiis commodi.</p>
                        <Link to="/cart">
                            <button className='btn btn-outline-dark' to="/cart"
 
                            >Order Now</button>
                        </Link>
                    </div>

                </div>
            </div>
            <Item />
            
        </>
    )
}

export default Home