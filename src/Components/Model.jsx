import React, { useState } from 'react'
import { data } from './DummyData';

import { Modal, Button } from 'react-bootstrap';

export default function Model() {
  const { registrationForm, projectInfo, projectDetails } = data;

  const [showModal, setShowModal] = useState(false);
  
  async function sendEnquiry() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    try {
      const response = await axios.post("https://formspree.io/f/mvoegweb", {
        name,
        phone,
        
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
  return (
    <div>
      <Modal show={showModal} onHide={handleModalClose} centered>
        {/* <form action="https://formspree.io/f/{form_id}" method="post"> */}
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
            // onClick={handleModalClose}
            onClick={sendEnquiry}
          >
            {registrationForm.submitButtonText}
          </Button>
        </Modal.Body>
      {/* </form> */}
    </Modal>
    </div >
  )
}
