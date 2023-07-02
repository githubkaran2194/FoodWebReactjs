import React from 'react'

const About = () => {
  return (
  <>
    <div className="container about mb-4">
        <div className="row">
        <div className="about-us mb-3 mt-3">
            <h1 className='text-center'>About Our Shop</h1>
            </div>
            <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" alt="img" className='col-md-6 shadow p-1' height={400}/>

            <section className="col-md-6">
            <p className='text-center fs-5'><strong>Welcome to our shop!</strong></p>
          <h2>Quality
          <br />
           F<span className='text-primary'>oo</span>ds
           <br />
            Cafe</h2>
            </section>
        </div>
        </div>
           
    
  </>
  )
}

export default About