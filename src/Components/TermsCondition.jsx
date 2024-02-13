import React from 'react';
import { terms } from './DummyData';
import Images from '../Images/Images';
import { Link, useNavigate } from 'react-router-dom';

export default function TermsConditions() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/T&C');
  };

  const { main } = terms;

  return (
    <>
      <div className="container-fluid">
        <div style={{ backgroundColor: '#000' }}>
          <p className='py-5' style={{ letterSpacing: '3', fontSize: '35px', color: '#fff', justifyContent: 'center', textAlign: 'center' }}>{terms.title}</p>
        </div>
        <div className="container">
          <p style={{ margin: '0 0 20px 0', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>{terms.paragraph}</p>
        </div>
      </div>

      <div>
        <div className="container-fluid" style={{ backgroundColor: "#dd0c2c" }}>
          <div className="container">
            <div className="row">
              <h3 className='text-center text-white mt-5 mb-4'> Contact Sales Offices</h3>
              <div className='line1 text-center mb-2'></div>
              <div className="col-md-6">
                <div><p className='text-white my-5 mx-3'><i className="fa-solid fa-location-arrow fa-xl fw-bolder"></i> Kandivali West, Mumbai, Maharashtra</p></div>
                <div><p className='text-white my-5 mx-3'><i className="fa-solid fa-earth-americas fa-xl me-3"></i>bigbull-kandivali.makemyproperty.co.in</p></div>
                <div><p className='text-white my-5 mx-3'><i className="fa-solid fa-phone fa-xl"></i>+919029263511</p></div>
              </div>

              <div className="col-md-6 text-center">
                <div style={{ padding: '20px', borderRadius: '10px' }}>
                  <h1 style={{ fontSize: '26px', margin: '20px 0px 30px', color: '#fff' }}>Fill Your Contact Details</h1>
                  <div style={{ margin: '0px 0px 20px' }}>
                    <input style={{ width: '90%', padding: '15px', border: '2px solid #fff', borderRadius: '8px', fontSize: '16px', color: '#fff', backgroundColor: "transparent" }} type="text" placeholder=" Name*" />
                  </div>
                  <div style={{ margin: '0px 0px 20px' }}>
                    <input style={{ width: '90%', padding: '15px', border: '2px solid #fff', borderRadius: '8px', fontSize: '16px', color: '#fff', backgroundColor: "transparent" }} type="tel" placeholder="Phone Number*" />
                  </div>
                  <p onClick={handleNavigate} style={{ margin: '0px 0px 20px', fontSize: '14px', color: '#ddd' }}>
                    By Clicking Submit, I Accept The <span style={{ cursor: 'pointer', color: '#ddd' }} onClick={handleNavigate}>Terms & Conditions</span>
                  </p>
                  <button style={{ color: '#dd0c2c', backgroundColor: '#fff', fontWeight: '600', padding: '10px 120px', borderRadius: '8px', fontSize: '18px', boxShadow: '0px 8px 15px rgb(0 0 0 / 30%)' }} type="button" className="btn">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <ul className='d-flex' style={{ textDecoration: 'none', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <li style={{ marginRight: '20px', listStyle: 'none' }}>About Us</li>
          <li style={{ marginRight: '20px', listStyle: 'none' }}>Terms & Conditions</li>
          <li style={{ marginRight: '20px', listStyle: 'none' }}>Cookies Policy</li>
          <li style={{ listStyle: 'none' }}>Privacy Policy</li>
        </ul>

        <div><p style={{ textAlign: 'justify' }}>{terms.Disclaimer}</p></div>

        {/* <div style={{ alignItems: 'center', alignContent: 'center', textAlign: 'center' }}><img className='my-5' src={Images.barcode} alt="" /></div> */}
        <p style={{ fontSize: '13px', lineHeight: '20px', textAlign: 'center', paddingBottom: '20px', margin: '0 0 20px 0' }}> &nbsp;|&nbsp;{terms.projectNo}</p>
        <hr />
        <p style={{ textAlign: 'center' }}>Copyrights © All Rights Reserved</p>
      </div>
    </>
  );
}
