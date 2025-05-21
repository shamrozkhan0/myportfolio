import React from 'react'
import '../../styles/Components/Banner.css'

import BannerImage from '../../assets/images/shamroz.png'

const Banner = () => {
  return (
    <section className='container ' aria-label='Shamroz introductions'>
      <div className="row pt-100">
        <div className="col-12 col-lg-6 d-flex flex-column gap-3 ps-3 p-md-5">
          <h1 className='text-secondary '>Full Stack Java Developer</h1>
          <div className="d-flex align-items-center">
            <h2 className='fs-100 fw-semibold text-light ls-3 '>Shamroz Khan<span className='text-success'>.</span></h2> 
          </div>
          <p className='banner-p ps-3 ps-md-5 pe-100 text-secondary fw-medium fs-18 position-relative '>
            Hey I am a full stack java developer working on Spring Boot stack budilding scalable,
            robust application and secure API end points
          </p>
        </div>

        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-end pt-5 position-relative">
          <button className='d-flex flex-column gap-1 bg-purple align-items-center justify-content-center resume-button text-white
                  border-0 fs-5 rounded-circle position-absolute z-1'>
            <i className='fas fa-download  fs-3'></i>
            Download CV
          </button>
          <div className="w-100 h-100  banner-profile rounded-circle d-flex align-items-end justify-content-center overflow-hidden position-relative">
            <img src={BannerImage} alt="" className='  banner-image' />
          </div>

        </div>
      </div>
    </section>
  )
}


export default Banner