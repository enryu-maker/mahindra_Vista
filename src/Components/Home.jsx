import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import vistaimg from '../Images/Screenshot_1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './DummyData';

import PriceList from './PriceList';
import Plans from './Plans';
import Videoo from './Videoo';
import Gallary from './Gallary';
import Brouchers from './Brouchers';
import Location from './Location';
import Amenities from './Amenities';
import AboutFinwizz from './AboutFinwizz ';
import ContactSales from './ContactSales';
import Footer from './Footer';

export default function Home() {
  const { registrationForm, projectInfo , projectDetails } = data;

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePhotoClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#000' }}>
        <div className="row">
      <div className="col-md-4">
            <div className="text-center bg-light">
              <div className="sliderlefts">
                <h3 className='py-3' style={{ backgroundColor: '#dd0c2c', textAlign: 'center', fontSize: '18px', margin: '0px 0px 10px', padding: '12px 5px', color: '#fff' }}>{projectInfo.comingSoonText}</h3>
                <h2 style={{ fontSize: '20px', margin: '15px 0px 0px', color: 'black' }}>{projectInfo.projectName}</h2>
                <h5 style={{ fontSize: '13px', margin: '5px 0px 10px' }}>{projectInfo.location}</h5>

                <div className="goldenticket-capbox">
                  <div className="card-d card-d-custom" style={{ backgroundColor: '#EEEE', fontSize: '15px', padding: '10px 15px', justifyContent: 'center', display: 'flex', lineHeight: '26px', textAlign: 'left' }}>
                    <div>
                      <span className="heading2 pe-4">Land Acres	</span><br />
                      <span className="heading1 "><b>{projectInfo.landParcel}</b></span>
                    </div>

                    <div>
                      <span className="heading2 pe-4">Towers </span><br />
                      <span className="heading1"><b>{projectInfo.floors}</b></span>
                    </div>

                    {/* <div>
                      <span className="heading2">Possession </span><br />
                      <span className="heading1"><b>{projectInfo.possession}</b></span>
                    </div> */}
                  </div>

                  <div className="pre-launch-heading" style={{ fontSize: '15px', margin: '0px 0px 0px', padding: '5px', color: '#fff', backgroundColor: '#dd0c2c', fontWeight: 'bold' }}>
                   <p>{projectInfo.offerBonanza1}</p> 
                   <p>{projectInfo.offerBonanza2}</p> 
                   <p>{projectInfo.offerBonanza3}</p> 
                   <p>{projectInfo.offerBonanza4}</p> 
                  </div>
                  <div className="pre-launch-content" style={{ color: '#171717', padding: '15px 10px', backgroundColor: '#EEE', fontWeight: 'bold', fontSize: '14px' }}>
                    <span className="animated bounceIn infinite" style={{ display: 'block', fontSize: '16px', lineHeight: '20px' }}>{projectInfo.specialPriceText}</span>
                  </div>

                  <p style={{ margin: '5px 0 0px ', fontSize: '17px' }}>2 & 3 BHK Premium Residences Starts</p>
                  <h4 style={{ color: '#333', fontSize: '32px', fontWeight: 'bold' }}><strong>{projectInfo.startingPrice}</strong><br /></h4>
                </div>
                <button style={{ color: '#fff', backgroundColor: '#dd0c2c', fontWeight: '600', boxShadow: '0px 8px 15px rgb(0 0 0 / 30%)' }} type="button" className="btn mb-2"  onClick={handlePhotoClick}>Express your Intrest</button>
                {/* <p className='py-4'>{projectInfo.reraNumber}</p> */}
              </div>
            </div>
          </div>
        <div className="col-sm-4 text-center" style={{ position: 'relative' }}>
          <img style={{ width: '100%',height:"530px" }} src={vistaimg} alt=""className='' onClick={handlePhotoClick} />
          <Modal show={showModal} onHide={handleModalClose} centered>
            <form action="https://formspree.io/f/{form_id}" method="post">
            <Modal.Header closeButton>
              <Modal.Title>{registrationForm.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
              <div style={{ margin: '0px 0px 20px' }}>
                <input
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '2px solid #dd0c2c',
                    borderRadius: '8px',
                    fontSize: '16px',
                    color: '#000',
                    backgroundColor: '#fff',
                  }}
                  type="text"
                  placeholder={registrationForm.namePlaceholder}
                />
              </div>
              <div style={{ margin: '0px 0px 20px' }}>
                <input
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '2px solid #dd0c2c',
                    borderRadius: '8px',
                    fontSize: '16px',
                    color: '#000',
                    backgroundColor: '#fff',
                  }}
                  type="tel" minLength={10} maxLength={10}
                  placeholder={registrationForm.emailPlaceholder}
                />
              </div>
              <p style={{ margin: '0px 0px 20px', fontSize: '14px', color: '#000' }}>
                {registrationForm.termsAndConditionsText}
              </p>
              <Button
                style={{
                  color: '#fff',
                  backgroundColor: '#dd0c2c',
                  fontWeight: '600',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  fontSize: '18px',
                  boxShadow: '0px 8px 15px rgb(0 0 0 / 30%)',
                }}
                type="button"
                onClick={handleModalClose}
                // onClick={handlePhotoClick}
              >
                {registrationForm.submitButtonText}
              </Button>
            </Modal.Body>
            </form>
          </Modal>
        </div>
        <div className="col-md-4 text-center">
            <div style={{ backgroundColor: '#000', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.1)' }}>
              <h1 style={{ fontSize: '26px', margin: '20px 0px 30px', color: '#fff' }}>{registrationForm.title}</h1>
              <div style={{ margin: '0px 0px 20px' }}>
                <input style={{ width: '100%', padding: '15px', border: '2px solid #dd0c2c', borderRadius: '8px', fontSize: '16px', color: '#fff', backgroundColor: '#000' }} type="text" placeholder={registrationForm.namePlaceholder} />
              </div>
              <div style={{ margin: '0px 0px 20px' }}>
                <input style={{ width: '100%', padding: '15px', border: '2px solid #dd0c2c', borderRadius: '8px', fontSize: '16px', color: '#fff', backgroundColor: '#000' }} type="text" placeholder={registrationForm.emailPlaceholder} />
              </div>
              <p  style={{ margin: '0px 0px 20px', fontSize: '14px', color: '#ddd' }}>{registrationForm.termsAndConditionsText}</p>
              <button style={{ color: '#fff', backgroundColor: '#dd0c2c', fontWeight: '600', padding: '10px 120px', borderRadius: '8px', fontSize: '18px', boxShadow: '0px 8px 15px rgb(0 0 0 / 30%)' }} type="button" className="btn">{registrationForm.submitButtonText}</button>
            </div>
          </div>
        </div>
      </div>


      <div style={{ backgroundColor: '#f1f1f1' }}>
        <div className="container project-details">
          <div className="row">
            <div className="col-lg-12 my-4">
              <h2 className="mb-4 text-center" style={{ color: '#dd0c2c', backgroundColor: '#f1f1f1' }}>{projectDetails.title}</h2>
              <h4 className="mb-4 text-center" style={{ color: '#dd0c2c', backgroundColor: '#f1f1f1' }}>{projectDetails.title1}</h4>
              <p className="lead" style={{ textAlign: 'left', fontSize: '16px' }}>{projectDetails.description}</p>
            </div>
          </div>
          <div className="text-center my-3">
            {/* <a href="#" className={`btn btn-lg ${projectDetails.buttonColor}`}><i className={`fa-solid fa-${projectDetails.buttonIcon} fa-bounce`}></i> &nbsp;{projectDetails.buttonText}</a> */}
            <button className="btn text-white shadow my-5  py-3"   onClick={handlePhotoClick} style={{ backgroundColor: "#dd0c2c", width:"300px"}}><i class="fa-solid fa-download fa-bounce me-3"></i> Express Your intrest</button>
          </div>
        </div>
      </div>

      <PriceList/>
      <Plans/>
      <Videoo/>
    <Amenities/>
      <Gallary/>
      <Brouchers/>
      <Location/> 
      <AboutFinwizz/>
      <ContactSales/>
      <Footer/>
      
    </>
  );
}