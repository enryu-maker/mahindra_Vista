import React from 'react'
import { terms } from './DummyData'
import Images from '../Images/Images'

export default function Footer() {
  return (
    <>
    <div className='container mt-5'>
    <ul className='d-flex' style={{ textDecoration:'none', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
        <li style={{ marginRight: '20px', listStyle:'none',fontSize:"30px" }}>About Us</li>
        {/* <li style={{ marginRight: '20px', listStyle:'none' }}>Terms & Conditions</li>
        <li style={{ marginRight: '20px', listStyle:'none' }}>Cookies Policy</li>
        <li style={{ listStyle:'none'}}>Privacy Policy</li> */}
    </ul>

    <div><p style={{textAlign:'justify'}}>{terms.Disclaimer}</p></div>

   
<p style={{fontSize:'13px',lineHeight:'20px', textAlign:'center',paddingBottom:'20px', margin:'0 0 20px 0'}}>{terms.projectNo}</p>
<hr />
<p style={{textAlign:'center'}}>Copyrights © All Rights Reserved</p>
</div>
    
    </>
  )
}
