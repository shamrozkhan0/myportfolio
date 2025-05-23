import React from 'react'
import '../../styles/Components/Banner.css'

import BannerImage from '../../assets/images/shamroz.png'
const LinkedinProfile = 'https://www.linkedin.com/in/shamrozkhan0/';
const GithubProfile = 'https://github.com/shamrozkhan0/';
const ShiftersProfile = 'https://shifters.dev/shamrozkhan';
import ShiftersLogo from '../../assets/images/svg/shifters.svg'

const Banner = () => {
  return (
    <section className='container ' aria-label='Shamroz introductions'>
      <div className="row pt-100">

        <div className="col-12 col-lg-6 d-flex flex-column gap-3 ps-3 p-md-5">
          <h1 className='text-secondary '>Full Stack Java Developer</h1>
          <div className="d-flex align-items-center">
            <h2 className='fs-100 fw-semibold text-light ls-3 '>Shamroz Khan<span className='text-success '>.</span></h2>
          </div>
          <p className='banner-p border-start ps-3 ps-md-5 pe-100 text-secondary fw-medium fs-18 position-relative'>
            Hey I am a full stack java developer working on Spring Boot stack budilding scalable,
            robust application and secure API end points
          </p>
        </div>



        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-end pt-5 position-relative">
          <div className="row w-100">

            <div className="col-4 position-relative">
              <a
                href={BannerImage}
                type='download'
                className='d-flex flex-column gap-2 bg-purple align-items-center justify-content-center resume-button text-white
                  border-0 fs-6 rounded-circle position-absolute z-1 fw-semibold alignment-cv-btn text-decoration-none '>
                <i className='fas fa-download  fs-3'></i>
              </a>

              <a
                href={LinkedinProfile}
                target='_black'
                className='d-flex flex-column gap-2 bg-purple align-items-center justify-content-center resume-button text-white
                  border-0 fs-6 rounded-circle z-1 fw-semibold position-absolute alignment-linkedin-btn text-decoration-none'>
                <i className='fa-brands fa-linkedin  fs-3'></i>
              </a>

              <a
                href={"#?"}
                className='bg-purple rounded-circle shifters-btn'
              >
                <img src={ShiftersLogo} alt="" className='' />
              </a>

              <a
                href={GithubProfile}
                target='_black'
                className='d-flex flex-column gap-2 bg-purple align-items-center justify-content-center resume-button text-white
                  border-0 fs-6 rounded-circle z-1 fw-semibold position-absolute alignment-github-btn text-decoration-none'>
                <i class="fa-brands fa-github fs-3"></i>
              </a>
            </div>


            <div
              className="col-8">
              <div className="w-100 h-100  banner-profile rounded-circle d-flex align-items-end justify-content-center overflow-hidden position-relative">
                <img src={BannerImage} alt="" className='  banner-image' />
              </div>
            </div>


          </div>
        </div>

      </div>
    </section>
  )
}


export default Banner