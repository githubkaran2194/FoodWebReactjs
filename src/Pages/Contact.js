import React from 'react'

const Contact = () => {
  return (
   <>
    <div className="container mb-3">
      <div className="row">
        <h1 style={{textAlign: "center"}}><strong>Contact Us</strong></h1>
        <p>&nbsp;</p>
        <form>
        <div className="mb-3">
        <label htmlFor="" className='mb-1'>Name:</label>
          <input type="text" placeholder='Enter your Full Name' className='form-control' required/>
        </div>
        <div className="mb-3">
        <label htmlFor="" className='mb-1'>Email:</label>
          <input type="text" placeholder='Enter your Email' className='form-control' required/>
        </div>
        <div className="mb-3">
        <label htmlFor="" className='mb-1'>Message:</label>
         <textarea name="Message" id="" cols="30" rows="10" placeholder='Your Message' className='form-control' required></textarea>
        </div>
        <button className='btn btn-primary px-4'>Submit</button>
        </form>
      </div>
    </div>
   </>
  )
}

export default Contact