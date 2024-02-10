




import React from 'react';
import logo from '../Images/Mahindra-Vista-Logo-Finwizz-PSD.webp';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
  <>
    <div>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "white" }}>
        <div className="container-fluid">
          <img src={logo} alt="" height={70} width={250} />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown" style={{ lineHeight: "1px" }}>
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link active text-dark " aria-current="page" to="#" style={{ fontSize: "15px", borderRight: "1px black solid" }}>ABOUT US</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Amenities" style={{ fontSize: "15px", borderRight: "1px black solid" }}>AMENITIES</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-dark" to="/Video" style={{ fontSize: "15px", borderRight: "1px black solid" }}>VIDEO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Location" style={{ fontSize: "15px", borderRight: "1px black solid" }}>LOCATION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Plans" style={{ fontSize: "15px", borderRight: "1px black solid" }}>PLANS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/PriceList" style={{ fontSize: "15px", borderRight: "1px black solid" }}>PRICE LIST</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/PriceList" style={{ fontSize: "15px", borderRight: "1px black solid" }}>OFFER</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="#" style={{ fontSize: "15px", borderRight: "1px black solid" }}>SITE VISIT</Link>
              </li>
              <li className="nav-item dropdown" >
                <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "15px", borderRight: "1px black solid" }}>
                  MORE
                </a>
                <ul className="dropdown-menu " style={{ fontSize: "15px", borderRight: "1px black solid", lineHeight:"10px" }}>
                  <li><a className="dropdown-item" to="#" style={{ fontSize: "15px" }}>HIGHLIGHTS</a></li>
                  <li><a className="dropdown-item" to="#" style={{ fontSize: "15px" }}>VIDEO WALK THROUGH</a></li>
                  <li><a className="dropdown-item" to="#" style={{ fontSize: "15px" }}>CONTACT SALES</a></li>
                </ul>
              </li>
            </ul>
            <div className='ms-2 ms-lg-5' style={{ paddingLeft: "0" }}><button className='btn btn-outline-dark bg-dark text-white ' >9967155511</button></div>
          </div>
        </div>
      </nav>
    </div>

    
    </>
  );
}