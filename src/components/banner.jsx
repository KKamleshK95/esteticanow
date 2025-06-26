import React from 'react';
import banner from '../assets/banner.png';
import salon from '../assets/salon.png';
import spa1 from '../assets/spa 1.png';
import clinic from '../assets/clinic.png';
// Update the path if your banner image is elsewhere

const Banner = () => (
    <div>

        <div className="row row-cols-3 row-cols-lg-3  justify-content-between align-items-center flex-wrap mt-5">
            <div className="col mb-4 d-flex justify-content-start">
                <div className="card rounded-5 d-flex align-items-center justify-content-around p-4 w-100">
                     <div className="row g-0 text-center">
                        <div className='col-sm-auto col-md-8'>
                            <img src={salon} alt="Salon" className="img-thumbnail border-0" />
                        </div>
                        <div className='col-6  col-sm-12 col-md-4  align-self-center'>
                            <div className=" mt-3  fs-5 fw-semibold fs-md-4">Salon</div>
                        </div>
                     </div>
                    
                </div>
            </div>
            <div className="col mb-4 d-flex justify-content-center">
                <div className="card rounded-5 d-flex align-items-center justify-content-around p-4 w-100">
                    <div className="row g-0 text-center">
                        <div className='col-sm-auto col-md-8'>
                            <img src={spa1} alt="Spa" className="img-thumbnail border-0 " />
                        </div>
                        <div className='col-6 col-sm-12 col-md-4  align-self-center'>
                            <div className=" mt-3  fs-5 fw-semibold fs-md-4 ">SPA</div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="col mb-4 d-flex justify-content-end">
                <div className="card rounded-5 d-flex align-items-center justify-content-around p-4 w-100">
                    <div className="row g-0 text-center">
                        <div className='col-sm-auto col-md-8'>
                            <img src={clinic} alt="Clinic" className="img-thumbnail border-0" />
                        </div>
                        <div className='col-6 col-sm-12 col-md-4  align-self-center'>
                            <div className=" mt-3 fs-5 fw-semibold fs-md-4">Clinic</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner mt-5 d-flex justify-content-center">
            <img src={banner} alt="Spa" className="img-fluid w-100" style={{ maxHeight: 350, objectFit: 'cover' }} />
        </div>
        <style>{`
            
        `}</style>
    </div>
);

export default Banner;