import React from 'react';
import location from '../Images/locationmap.webp';

export default function Location() {
  const accordionData = [
    {
      title: "Education Institutions",
      list: ["Lokhandwala Foundation School - 06 Min", "Thakur Public School - 16 Min", "Oxford International School - 19 min", "Ryan International School - 15 min", "Cambridge School - 18 min", "Oberoi International School - 21 min"],
    },
    {
      title: "Hospitals",
      list: ["DNA Multispeciality Hospital - 06 min", "Shree Sai Hospital - 14 min", "Sanjeevani Hospital - 21 min", "ALAP Hospital - 15 min"],
    },
    {
      title: "Banks",
      list: ["HDFC - 04 min ", "SBI - 05 min", "ICICI - 05 min"],
    },

  ];

  return (
    <div id="/Location" >
      <div className="container-fluid bg-light">
        <div className="container ">
          
            <h3 className="text-center mt-5" style={{ color: '#dd0c2c' }}>Location</h3>
            <div className="line mb-5"></div>
            <div className="row">
              <div className="col-md-6">
                <img src={location} alt="" className='img-fluid' style={{ width: "370px", height: "400px" }} />
              </div>
              <div className="col-md-6">
                <div className="accordion " id="accordionExample">
                  {accordionData.map((item, index) => (
                    <div className="accordion-item mt-2 border border-dark border-2" style={{ background: "transparent" }} key={index}>
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
                {/* <div className='d-flex justify-content-end'><button className='btn text-white mt-5 py-2'style={{backgroundColor:"#dd0c2c"}}> <i class="fa-solid fa-location-dot fa-beat-fade mx-3"></i>GET LOCATION ON YOUR PHONE</button></div> */}
              </div>
            </div>
          
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 text-center" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30141.879987954897!2d72.8448715!3d19.206773499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c7d151eb11%3A0x53c60cb900ce3b40!2sKandivali%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703314692030!5m2!1sen!2sin" frameborder="0" style={{ height: "300px", textAlign: "center" }}></iframe>
        </div>
      </div>
    </div>
  );
}
