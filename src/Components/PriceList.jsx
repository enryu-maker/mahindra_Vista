import './All.css'
import { priceList ,data } from './DummyData';
import axios from 'axios'
import img from '../Images/pricelist.webp'
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

export default function PriceList() {

    const { registrationForm, projectInfo , projectDetails, Broucher } = data;
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => {
        setShowModal(false);
      };
    
      const handlePhotoClick = () => {
        setShowModal(true);
      };

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

    // const priceList = [
    //     {
    //         flatSize: "1 BHK",
    //         sqFeet: "433 sq.ft.",
    //         price: "1.23 Cr(All Inc)"
    //     },
    //     {
    //         flatSize: "2 BHK",
    //         sqFeet: "600-700 sq.ft.",
    //         price: "1.70 Cr(All Inc)"
    //     },
    //     {
    //         flatSize: "3 BHK",
    //         sqFeet: "934-1061 sq.ft.",
    //         price: "2.64 Cr(All Inc)"
    //     },
    //     {
    //         flatSize: "4 BHK",
    //         sqFeet: "1620 sq.ft.",
    //         price: "4.58 Cr(All Inc)"
    //     },
    // ];
{/* <Home/> */}
    return (
        <div id='/PriceList'>
            <div className="container-fluid backgroundImg">
                <h3 className='text-center fw-bolder mt-5 ' style={{color:"#dd0c2c"}}>BigBull Kandivli Price List</h3>
                <div className='line'></div>
                <div className="container"> 
                    <div className="row mt-5">
                        {priceList.map((item, index) => (
                            <div className="col-md-4 " key={index}>
                                <div className="card text-center mb-3 ">
                                    <div className="card-body mt-3">
                                        <h5 className="card-title fw-bold mt-1">{item.flatSize}</h5>
                                        <p className="card-text fw-bold mt-3"> {item.sqFeet}</p>
                                        <p className="card-text fw-bold mt-3"><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> {item.price}</p>
                                        <a   onClick={handlePhotoClick} className="btn mt-3 text-white" style={{backgroundColor:"#dd0c2c"}}>Express your Intrest</a>
                                    </div>
                                </div>
                                <div><img src={img} alt="" /></div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>



            <Modal show={showModal} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{Broucher.title}</Modal.Title>
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
                {Broucher.submitButtonText}
              </Button>
            </Modal.Body>
          </Modal>


        </div>
    );
}

