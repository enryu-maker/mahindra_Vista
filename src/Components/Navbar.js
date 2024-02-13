import React from 'react';
import logo1 from '../Images/logo1.svg';

import { Link } from 'react-scroll';

export default function Navbar() {
  return (
  <>
    <div>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "white" }}>
        <div className="container-fluid">
         
          <img src={logo1} alt="" height={70} width={250} />


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown" style={{ lineHeight: "1px" }}>
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link className="nav-link active text-dark " to="/about" smooth={true} offset={500} duration={100} aria-current="page" style={{ fontSize: "15px", borderRight: "1px black solid", cursor:'pointer' }}>ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/amenities" smooth={true} offset={-100} duration={100} style={{ fontSize: "15px", borderRight: "1px black solid" , cursor:'pointer' }}>AMENITIES</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-dark" to="/Video" smooth={true} offset={-200} duration={100} style={{ fontSize: "15px", borderRight: "1px black solid" , cursor:'pointer'}}>VIDEO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Location" smooth={true} offset={120} duration={130} style={{ fontSize: "15px", borderRight: "1px black solid", cursor:'pointer' }}>LOCATION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Plans" smooth={true} offset={-50} duration={130} style={{ fontSize: "15px", borderRight: "1px black solid",cursor:'pointer' }}>PLANS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/PriceList" smooth={true} offset={-50} duration={130} style={{ fontSize: "15px", borderRight: "1px black solid",cursor:'pointer' }}>PRICE LIST</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/PriceList" style={{ fontSize: "15px", borderRight: "1px black solid",cursor:'pointer' }}>OFFER</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="#" style={{ fontSize: "15px", borderRight: "1px black solid",cursor:'pointer' }}>SITE VISIT</Link>
              </li>
              {/* <li className="nav-item dropdown" >
                <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "15px", borderRight: "1px black solid" }}>
                  MORE
                </a>
                <ul className="dropdown-menu " style={{ fontSize: "15px", borderRight: "1px black solid", lineHeight:"10px" }}>
                  <li><a className="dropdown-item" to="#" style={{ fontSize: "15px" }}>HIGHLIGHTS</a></li>
                  <li><a className="dropdown-item" to="#" style={{ fontSize: "15px" }}>VIDEO WALK THROUGH</a></li>
                  <li><a className="dropdown-item" to="#" style={{ fontSize: "15px" }}>CONTACT SALES</a></li>
                </ul>
              </li> */}
            </ul>
            <div className='ms-2 ms-lg-5' style={{ paddingLeft: "0" }}><button className='btn btn-outline-dark bg-dark text-white' >9029263511</button></div>
          </div>
        </div>
      </nav>
    </div>

    
    </>
  );
}
