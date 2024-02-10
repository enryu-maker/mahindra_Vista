import React from 'react';
import location from '../Images/location.png';

export default function Location() {
  const accordionData = [
    {
      title: "RAILWAY CONNECTIVITY",
      list: ["Kandivli Railway Station-2Km", "Borivali Metro Station-3Km", "Metro Station-0.3Km"],
    },
    {
      title: "SHOPPING MALLS",
      list: ["Growels 101 mall-4.8Km", "Vishnu Shivam Mall-5Km"],
    },
    {
      title: "SCHOOLS",
      list: ["Ryan International School - 5.7 km", "Raj High School - 5.1 Km", "Lokhandwala Foundation School - 5 Km"],
    },
    {
      title: "HELTHCARE",
      list: ["Agrawal Hospital - 3.4 Km", "Shreeji Hospital - 1.4 Km"],
    },
  ];

  return (
    <div >
        <div className="container-fluid bg-light">
      <div className="container ">
        <div className="row">
          <h3 className="text-center mt-5" style={{ color: '#dd0c2c' }}>Location</h3>
          <div className="line mb-5"></div>
          <div className="row">
            <div className="col-md-6">
              <img src={location} alt="" className='img-fluid'/>
            </div>
            <div className="col-md-6">
              <div className="accordion " id="accordionExample">
                {accordionData.map((item, index) => (
                  <div className="accordion-item mt-2 border border-dark border-2" style={{background:"transparent"}} key={index}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${index === 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`collapse${index}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <ul>
                          {item.list.map((listItem, listIndex) => (
                            <li key={listIndex}>{listItem}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='d-flex justify-content-end'><button className='btn text-white mt-5 py-2'style={{backgroundColor:"#dd0c2c"}}> <i class="fa-solid fa-location-dot fa-beat-fade mx-3"></i>GET LOCATION ON YOUR PHONE</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
