import React from 'react';
import '../Components/All.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import '../Components/All.css';
import Slider from 'react-slick';
import outdoor from '../Images/background_files/cricket-bat.png';
import indoor from '../Images/background_files/table-tennis.png';
import gym from '../Images/background_files/treadmill.png';
import kids from '../Images/background_files/playground.png';
import senior from '../Images/background_files/grandparents.png';
import multi from '../Images/background_files/cinema.png';
import security from '../Images/background_files/cctv.png';
import yoga from '../Images/background_files/yoga-position.png';
import garden from '../Images/background_files/park.png';
import jogging from '../Images/background_files/jogging.png';
import cardback from '../Images/cardback1.jpeg'

export default function Amenities() {
  const amenitiesData = [
    { image: outdoor, title: 'OUTDOOR GAMES' },
    { image: indoor, title: 'INDOOR GAMES' },
    { image: gym, title: 'GYMNASIUM' },
    { image: kids, title: 'KIDS PLAY AREA' },
    { image: senior, title: 'SENIOR CITIZEN ZONE' },
    { image: multi, title: 'MULTIPURPOSE HALL' },
    { image: security, title: 'SECURITY SYSTEM' },
    { image: yoga, title: 'YOGA' },
    { image: garden, title: 'GARDEN' },
    { image: jogging, title: 'JOGGING TRACK' },
    
  ];

  const settings = {
    dots: true,
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
        <button className="slick-arrow slick-next rounded-circle "  onClick={onClick} style={{ background: "#dd0c2c",display:"block", height:"50px",width:"50px",marginRight:"24px" }}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
}

  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center mt-5 mb-2" style={{ color: "#dd0c2c" }}>
          Amenities
        </h3>
        <div className="line mb-5"></div>
      </div>
      <div className="row" style={{}}>
        <Slider {...settings} >
          {amenitiesData.map((amenity, index) => (
            <div key={index} className="card border border-black cardback  " style={{...cardback  , height:"15rem" }}>
             <center> <img src={amenity.image} alt="" className="img-fluid my-5  " style={{height:"100px",width:"100px",textAlign:"center"}} /></center>
              <h5 style={{marginTop: "-40px",display:"flex", justifyContent:"center"  }}>{amenity.title} </h5>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
