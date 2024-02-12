

// import React from 'react';
// import video from '../Video/video.mp4';
// import '../Components/All.css'

// // import './Video.css'; // Assuming you have a CSS file for additional styling

// export default function Videoo() {
//   return (
//     <div className="container-fluid video-container">
//       <div className="position-relative">
//         <video src={video} autoPlay loop muted playsInline className="video-background"></video>

//         <div className="video-overlay">
//           <h3 className="text-white text-center fw-bold mb-5">Watch Sample Flat Video</h3>
//           <button className='btn mx-auto d-block text-white' style={{ backgroundColor:"#dd0c2c",marginLeft: "auto", marginRight: "auto", display: "block"}}><i className="fa-solid fa-circle-play mx-2"></i>Watch Video</button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import video from '../Video/video.mp4';
import '../Components/All.css';

export default function Videoo() {
  return (
    <div className="container video-container" id="/Video">
      <div className="position-relative">
        <video src={video} autoPlay loop muted playsInline className="video-background" style={{ height: '300px' }}></video>

        {/* <div className="video-overlay">
           

          <div className=""></div>
          <h3 className="text-white text-center fw-bold mb-5">Watch Sample Flat Video</h3>
          <button className='btn mx-auto d-block text-white' style={{ backgroundColor:"#dd0c2c",marginLeft: "auto", marginRight: "auto", display: "block"}}><i className="fa-solid fa-circle-play mx-2"></i>Watch Video</button>
        </div> */}
      </div>
    </div>
  );
}
