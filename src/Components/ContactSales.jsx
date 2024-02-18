import React from 'react';
import axios from 'axios';
import '../Components/All.css'

export default function ContactSales() {
  async function sendEnquiry(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    try {
      const response = await axios.post("https://formspree.io/f/mvoegweb", {
        name,
        phone,
        // Add other form data as needed
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


  return (
    <div>
      <div className="container" style={{ backgroundColor: "#dd0c2c" }}>
        <div className="container">
          <div className="row">
            <h3 className='text-center text-white mt-5 mb-4'> Contact Sales Offices</h3>
            {/* <div className='line1 text-center mb-5'></div> */}
            <div className="col-md-6">
              <div> <p className='text-white my-2 mx-3'><i className="fa-solid fa-location-arrow fa-xl fw-bolder mt-5"></i> Kandivali West, Mumbai, Maharashtra</p></div>
              <div> <p className='text-white my-2 mx-3'><i class="fa-solid fa-earth-americas fa-xl me-1 mt-5" ></i>bigbull-kandivali.makemyproperties.co.in</p></div>
              <div>  <p className='text-white my-2 mx-3 mt-5'><i class="fa-solid fa-phone fa-xl "></i>+919029263511</p></div>
            </div>

            <div className="col-md-6 text-center">
              <div style={{ padding: '20px', borderRadius: '10px' }}>
                <h1 style={{ fontSize: '26px', margin: '20px 0px 30px', color: '#fff' }}>Fill Your Contact Details</h1>
                <form onSubmit={sendEnquiry}>
                  <div style={{ margin: '0px 0px 20px' }}>
                    <input style={{ width: '90%', padding: '15px', border: '2px solid #fff', borderRadius: '8px', fontSize: '16px', color: '#fff', backgroundColor: "transparent" }} type="text" id='name' placeholder=" Name*" />
                  </div>
                  <div style={{ margin: '0px 0px 20px' }}>
                    <input style={{ width: '90%', padding: '15px', border: '2px solid #fff', borderRadius: '8px', fontSize: '16px', color: '#fff', backgroundColor: "transparent" }} type="tel" minLength={10} maxLength={10} id='phone' placeholder="Phone Number*" />
                  </div>
                  <p style={{ margin: '0px 0px 20px', fontSize: '14px', color: '#ddd' }}>By Clicking Submit, I Accept The Terms & Conditions</p>
                  <button style={{ color: '#dd0c2c', backgroundColor: '#fff', fontWeight: '600', padding: '10px 120px', borderRadius: '8px', fontSize: '18px', boxShadow: '0px 8px 15px rgb(0 0 0 / 30%)' }} type="submit" className="btn" onSubmit={sendEnquiry}>SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
