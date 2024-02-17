import { useState } from 'react';
//import React {useState}from 'react';
import axios from 'axios'
import img1 from '../Images/3bhk-320w.webp';
import img2 from '../Images/3bhk-320w (1).webp';
import img3 from '../Images/2BHK-PRO-TOWER-A-6.webp';
import { Modal, Button } from 'react-bootstrap';
import { data } from './DummyData';

export default function Plans() {

  const { registrationForm, projectInfo, projectDetails } = data;

  const [showModal, setShowModal] = useState(false);

  async function sendEnquiry() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    try {
      const response = await axios.post("https://formspree.io/f/mvoegweb", {
        name,
       phone,
        // Add other form data as needed
      });

      if (response.status === 200) {
        alert("Done");
        console.log('Success!', response.status);
      } else {
        console.log('Unexpected response:', response);
        alert("Error");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error");
    }
  }

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePhotoClick = () => {
    setShowModal(true);
  };




  const images = [
    {
      img: img1,
      btn: "VIEW 2 BHK PLAN"
    },
    {
      img: img2,
      btn: "VIEW 3 BHK PLAN"
    },
    {
      img: img3,
      btn: "VIEW MASTER PLAN"
    },
  ];

  return (
    <>
      <div id='/Plans'></div>
      <div>
        <center>
          <div className="container-fluid bg-light">
            <h3 className='mt-5 pt-5 text-center' style={{ color: "#dd0c2c" }}>Vista Plans</h3>
            <div className='line mb-5'></div>
            <div className="container ">
              <div className="row" onClick={handlePhotoClick} >
                {images.map((item, index) => (
                  <div key={index} className="col-md-4 mb-5">
                    <img src={item.img} alt={`Image ${index + 1}`} className="" style={{ border: "1px solid black, position:relative", width: "300px", height: "300px" }} />
                    <button className='btn text-white text-center' style={{ backgroundColor: "#dd0c2c", zIndex: "1", marginTop: "50px", width: "300px", height: "60px" }}>
                      <i className="fa-solid fa-download fa-bounce me-3"></i>{item.btn}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </center>
      </div>


      <div className="col-md-4 text-center" style={{ position: 'relative' }}>
        {/* <img style={{ width: '100%' }} src={vistaimg} alt="" onClick={handlePhotoClick} /> */}
        <Modal show={showModal} onHide={handleModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{registrationForm.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Your form content goes here */}
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
                id='name'
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
                id='phone'
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
              onClick={sendEnquiry}
            >
              {registrationForm.submitButtonText}
            </Button>
          </Modal.Body>
        </Modal>
      </div>

    </>
  );
}













