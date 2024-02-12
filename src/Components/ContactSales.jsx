import React from 'react';
import '../Components/All.css'

export default function ContactSales() {
    
    return (
        <div>
            <div className="container" style={{ backgroundColor: "#dd0c2c" }}>
                <div className="container">
                    <div className="row">
                        <h3 className='text-center text-white mt-5 mb-4'> Contact Sales Offices</h3>
                        {/* <div className='line1 text-center mb-5'></div> */}
                        <div className="col-md-6">
                           <div> <p className='text-white my-2 mx-3'><i className="fa-solid fa-location-arrow fa-xl fw-bolder mt-5"></i> Kandivali West, Mumbai, Maharashtra</p></div>
                           <div> <p  className='text-white my-2 mx-3'><i class="fa-solid fa-earth-americas fa-xl me-3 mt-5" ></i>vista-kandivli.in</p></div>
                          <div>  <p className='text-white my-2 mx-3 mt-5'><i class="fa-solid fa-phone fa-xl "></i>+919967155511</p></div>
                        </div>
                        
                        <div className="col-md-6 text-center">
  <div style={{  padding: '20px', borderRadius: '10px' }}>
    <h1 style={{ fontSize: '26px', margin: '20px 0px 30px', color: '#fff' }}>Fill Your Contact Details</h1>
    <div style={{ margin: '0px 0px 20px' }}>
      <input style={{ width: '90%', padding: '15px', border: '2px solid #fff', borderRadius: '8px', fontSize: '16px', color: '#fff',backgroundColor:"transparent" }} type="text" placeholder=" Name*" />
    </div>
    <div style={{ margin: '0px 0px 20px' }}>
      <input style={{ width: '90%', padding: '15px', border: '2px solid #fff', borderRadius: '8px', fontSize: '16px', color: '#fff',backgroundColor:"transparent" }} type="tel" placeholder="Phone Number*" />
    </div>
    <p style={{ margin: '0px 0px 20px', fontSize: '14px', color: '#ddd' }}>By Clicking Submit, I Accept The Terms & Conditions</p>
    <button style={{ color: '#dd0c2c', backgroundColor: '#fff',  fontWeight: '600', padding: '10px 120px', borderRadius: '8px', fontSize: '18px', boxShadow: '0px 8px 15px rgb(0 0 0 / 30%)' }} type="button" className="btn">SUBMIT</button>
  </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
