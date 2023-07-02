import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="container-fluid bg-black">
            <div className="row">
            <div className="col-md-12 shadow mt-4 p-2 text-center text-warning">
            <p>&copy; 2023 - All rights reserved. ❤️ <span>Designed by Karan</span></p>
            <div className="social">
            <a href="https://www.linkedin.com/in/karan-chavan2194/"  target={'_blank'}>
                <i className='fa fa-linkedin'></i>
            </a>
            <a href="https://github.com/githubkaran2194" target={'_blank'}>
                <i className='fa fa-github'></i>
            </a>
            </div>
           
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer