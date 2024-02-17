import React from 'react';
import '../Components/All.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import '../Components/All.css';
import Slider from 'react-slick';
import outdoor from '../Images/Amenities/swim.jpg';
import spa from '../Images/Amenities/spa (1).jpg';
import indoor from '../Images/Amenities/tennis.jpg';
import gym from '../Images/Amenities/gym.jpg';
import kids from '../Images/Amenities/kids.jpg';
import senior from '../Images/Amenities/senior-320w.webp';
import multi from '../Images/Amenities/ampi-320w.webp';
import security from '../Images/Amenities/ref.jpg';
import yoga from '../Images/Amenities/spa.jpg';
import garden from '../Images/Amenities/garden.jpg';
import jogging from '../Images/Amenities/walk-320w.webp';
import Halls from '../Images/Amenities/Halls-320w.webp';
import Footer from './Footer';
import ContactSales from './ContactSales';
import AboutFinwizz from './AboutFinwizz ';
import Gallary from './Gallary';
import Brouchers from './Brouchers'
// import cardback from '../Images/cardback1.jpeg'

export default function Amenities() {
  const card={
    border:"none"
  }
  const amenitiesData = [
    { image: outdoor, title: 'Swimming Pool' },
    { image: spa, title: ' Amphiteater' },
    { image: indoor, title: 'Squash Court' },
    { image: gym, title: 'Fitness Center' },
    { image: kids, title: 'Kids Pool' },
    { image: senior, title: 'Senior Citizen Area' },
    { image: multi, title: ' Multipurpose Hall' },
    { image: security, title: 'Relaxation' },
    { image: yoga, title: 'Salon And Spa' },
    { image: garden, title: 'Tiered Landscape Garden' },
    { image: Halls, title: 'Multipurpose Hall' },
    
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
  };
  function PrevArrow({ onClick }) {
    return (
        <button className="slick-arrow slick-prev rounded-circle " onClick={onClick}  style={{ background: "#dd0c2c",display:"block", height:"50px",width:"50px",zIndex:"1", position:"absolute",marginLeft: "24px"}}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
}

function NextArrow({ onClick }) {
    return (
        <button className="slick-arrow slick-next rounded-circle "  onClick={onClick} style={{ background: "#dd0c2c",display:"block", height:"50px",width:"50px",marginRight:"26px" }}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
}

  return (
    <>  
    <div className="container" id='/amenities'>
      <div className="row">
        <h3 className="text-center mt-5 mb-2" style={{ color: "#dd0c2c" }}>
          Amenities
        </h3>
        <div className="line mb-5"></div>
      </div>
      <div className="row" style={{}}>
        <Slider {...settings} >
          {amenitiesData.map((amenity, index) => (
            <div key={index} className="card border-none   " style={{...card, height:"15rem",border:"none" }}>
             <center> <img src={amenity.image} alt="" className="img-fluid mb-5  " style={{height:"250px",width:"350px",textAlign:"center"}} /></center>
              <h5 style={{marginTop: "-40px",display:"flex", justifyContent:"center"  }}>{amenity.title} </h5>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    {/* <Gallary/>
      <Brouchers/>
      <AboutFinwizz/>
    <ContactSales/>
    <Footer/> */}
    </>
  );
}
