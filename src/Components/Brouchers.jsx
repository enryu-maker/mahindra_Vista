
// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { data } from './DummyData';
// import { useNavigate } from 'react-router-dom';
// import { animateScroll as scroll } from 'react-scroll';


// export default function Home() {

//     const ScrollToTopButton = () => {
//         const scrollToTop = () => {
//           scroll.scrollToTop({
//             duration: 500, // Optional duration of the scroll animation
//             smooth: 'easeInOutQuart', // Optional smooth scrolling effect
//           });
//         };

//   const { registrationForm, projectInfo, projectDetails } = data;

//   const navigate=useNavigate("");

//   const [showModal, setShowModal] = useState(false);

//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   const handleGetBrochureClick = () => {
//     setShowModal(true);
//   };

//   return (
//     <>
      
//       <div className="row d-flex justify-content-center">
//         <button
//           className="btn text-white shadow my-5 py-3"
//           style={{ backgroundColor: "#dd0c2c", width: "300px" }}
//           onClick={handleGetBrochureClick}
//         >
//           <i className="fa-solid fa-download fa-bounce me-3 pe-3"></i> GET BROCHURES
//         </button>
//       </div>

//       <Modal show={showModal} onHide={handleModalClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>{registrationForm.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div style={{ margin: '0px 0px 20px' }}>
//             <input
//               style={{
//                 width: '100%',
//                 padding: '15px',
//                 border: '2px solid #dd0c2c',
//                 borderRadius: '8px',
//                 fontSize: '16px',
//                 color: '#000',
//                 backgroundColor: '#fff',
//               }}
//               type="text"
//               placeholder={registrationForm.namePlaceholder}
//             />
//           </div>
//           <div style={{ margin: '0px 0px 20px' }}>
//             <input
//               style={{
//                 width: '100%',
//                 padding: '15px',
//                 border: '2px solid #dd0c2c',
//                 borderRadius: '8px',
//                 fontSize: '16px',
//                 color: '#000',
//                 backgroundColor: '#fff',
//               }}
//               type="text"
//               placeholder={registrationForm.emailPlaceholder}
//             />
//           </div>
//           <p style={{ margin: '0px 0px 20px', fontSize: '14px', color: '#000' }}>
//             {registrationForm.termsAndConditionsText}
//           </p>
//           <Button
//             style={{
//               color: '#fff',
//               backgroundColor: '#dd0c2c',
//               fontWeight: '600',
//               padding: '15px 30px',
//               borderRadius: '8px',
//               fontSize: '18px',
//               boxShadow: '0px 8px 15px rgb(0 0 0 / 30%)',
//             }}
//             type="button"
//             onClick={()=>navigate("/Thanks")}
//             onClick={scrollToTop}
//           >
//             {registrationForm.submitButtonText}
//           </Button>
//         </Modal.Body>
//       </Modal>

      
//     </>
//   );
// }


import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './DummyData';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

export default function Home() {
  const { registrationForm } = data;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleGetBrochureClick = () => {
    setShowModal(true);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // ...

    // Close the modal
    setShowModal(false);

    // Scroll to top
    scrollToTop();

    // Navigate to "/Thanks"
    navigate('/Thanks');
  };

  return (
    <>
    <div className="container">
      <div className="row d-flex justify-content-center">
        <button
          className="btn text-white shadow my-5 py-3"
          style={{ backgroundColor: "#dd0c2c", width: "300px" }}
          onClick={handleGetBrochureClick}
        >
          <i className="fa-solid fa-download fa-bounce me-3 pe-3"></i> GET BROCHURES
        </button>
      </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{registrationForm.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{ margin: '0px 0px 20px' }}>
           <input
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #dd0c2c',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#000',
                backgroundColor: '#fff',
              }}
              type="text"
              placeholder={registrationForm.namePlaceholder}
            />
          </div>
          <div style={{ margin: '0px 0px 20px' }}>
            <input
              style={{
                width: '100%',
                padding: '15px',
                border: '2px solid #dd0c2c',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#000',
                backgroundColor: '#fff',
              }}
              type="text"
              placeholder={registrationForm.emailPlaceholder}
            />
          </div>
          <p style={{ margin: '0px 0px 20px', fontSize: '14px', color: '#000' }}>
            {registrationForm.termsAndConditionsText}
          </p>
          <Button
            style={{
              color: '#fff',
              backgroundColor: '#dd0c2c',
              fontWeight: '600',
              padding: '15px 30px',
              borderRadius: '8px',
              fontSize: '18px',
              boxShadow: '0px 8px 15px rgb(0 0 0 / 30%)',
            }}
            type="button"
            // onClick={()=>navigate("/Thanks")}
            onClick={handleSubmit}>
            {registrationForm.submitButtonText}
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
