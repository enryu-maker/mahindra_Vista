// // // import React from 'react';
// // // import Slider from 'react-slick';
// // // import gallary1 from '../Images/gallary-img1.jpg';
// // // import gallary2 from '../Images/gallary-img-2.jpg';
// // // import gallary3 from '../Images/gallery_img3.jpg';
// // // import gallary4 from '../Images/gallary5.jpg';
// // // import gallary5 from '../Images/gallery_img4.jpg';
// // // import 'slick-carousel/slick/slick.css';
// // // import 'slick-carousel/slick/slick-theme.css';

// // // export default function Gallary() {
// // //     const settings = {
// // //         dots: true,
// // //         infinite: true,
// // //         speed: 500,
// // //         slidesToShow: 3,
// // //         slidesToScroll: 1,
// // //         responsive: [
// // //             {
// // //                 breakpoint: 768,
// // //                 settings: {
// // //                     slidesToShow: 2,
// // //                     slidesToScroll: 2,
// // //                 },
// // //             },
// // //             {
// // //                 breakpoint: 576,
// // //                 settings: {
// // //                     slidesToShow: 1,
// // //                     slidesToScroll: 1,
// // //                 },
// // //             },
// // //         ],
// // //     };

// // //     return (
// // //         <div>
// // //             <div className="container-fluid">
// // //                 <div className="container">
// // //                     <div className="row">
// // //                         <h3 className="text-center mt-5" style={{ color: '#dd0c2c' }}>
// // //                             Vista Gallery
// // //                         </h3>
// // //                         <div className="line"></div>
// // //                         <div className="slider-container" style={{ width: '100%', height: 'auto' }}>
// // //                             <Slider {...settings}>
// // //                                 <div className='col-md-4'>
// // //                                     <img src={gallary1} className="img-fluid rounded-4"  alt="Gallery Image 1" style={{margin:"20px"}}/>
// // //                                 </div>
// // //                                 <div className='col-md-4'>
// // //                                     <img src={gallary2} className="img-fluid  rounded-4" alt="Gallery Image 2"  style={{margin:"20px"}}/>
// // //                                 </div>
// // //                                 <div className='col-md-4'>
// // //                                     <img src={gallary3} className="img-fluid  rounded-4" alt="Gallery Image 3"  style={{margin:"20px"}} />
// // //                                 </div>
// // //                                 <div className='col-md-4'>
// // //                                     <img src={gallary4} className="img-fluid  rounded-4" alt="Gallery Image 4"style={{margin:"20px"}} />
// // //                                 </div>
// // //                                 <div className='col-md-4'>
// // //                                     <img src={gallary5} className="img-fluid  rounded-4" alt="Gallery Image 5"style={{margin:"20px"}} />
// // //                                 </div>
// // //                             </Slider>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }


// // import React from 'react';
// // import Slider from 'react-slick';
// // import gallary1 from '../Images/gallary-img1.jpg';
// // import gallary2 from '../Images/gallary-img-2.jpg';
// // import gallary3 from '../Images/gallery_img3.jpg';
// // import gallary4 from '../Images/gallary5.jpg';
// // import gallary5 from '../Images/gallery_img4.jpg';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';

// // export default function Gallary() {
// //     const settings = {
// //         dots: true,
// //         infinite: true,
// //         speed: 500,
// //         slidesToShow: 3,
// //         slidesToScroll: 1,
// //         responsive: [
// //             {
// //                 breakpoint: 768,
// //                 settings: {
// //                     slidesToShow: 2,
// //                     slidesToScroll: 2,
// //                 },
// //             },
// //             {
// //                 breakpoint: 576,
// //                 settings: {
// //                     slidesToShow: 1,
// //                     slidesToScroll: 1,
// //                 },
// //             },
// //         ],
// //     };

// //     return (
// //         <div>
// //             <div className="container-fluid">
// //                 <div className="container">
// //                     <div className="row">
// //                         <h3 className="text-center mt-5" style={{ color: '#dd0c2c' }}>
// //                             Vista Gallery
// //                         </h3>
// //                         <div className="line"></div>
// //                         <div className="slider-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
// //                             <Slider {...settings}>
// //                                 <div className='col-md-4'>
// //                                     <img src={gallary1} className="img-fluid rounded-4" alt="Gallery Image 1" style={{ margin: "20px", width: "100%" }} />
// //                                 </div>
// //                                 <div className='col-md-4'>
// //                                     <img src={gallary2} className="img-fluid rounded-4" alt="Gallery Image 2" style={{ margin: "20px", width: "100%" }} />
// //                                 </div>
// //                                 <div className='col-md-4'>
// //                                     <img src={gallary3} className="img-fluid rounded-4" alt="Gallery Image 3" style={{ margin: "20px", width: "100%" }} />
// //                                 </div>
// //                                 <div className='col-md-4'>
// //                                     <img src={gallary4} className="img-fluid rounded-4" alt="Gallery Image 4" style={{ margin: "20px", width: "100%" }} />
// //                                 </div>
// //                                 <div className='col-md-4'>
// //                                     <img src={gallary5} className="img-fluid rounded-4" alt="Gallery Image 5" style={{ margin: "20px", width: "100%" }} />
// //                                 </div>
// //                             </Slider>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }


// import React from 'react';
// import Slider from 'react-slick';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import gallary1 from '../Images/gallary-img1.jpg';
// import gallary2 from '../Images/gallary-img-2.jpg';
// import gallary3 from '../Images/gallery_img3.jpg';
// import gallary4 from '../Images/gallary5.jpg';
// import gallary5 from '../Images/gallery_img4.jpg';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function Gallary() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                 },
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//         prevArrow: <PrevArrow />,
//         nextArrow: <NextArrow />,
//     };

//     const PrevArrow = ({ onClick }) => (
//         <button className="slick-arrow slick-prev" onClick={onClick}>
//             <FontAwesomeIcon icon={faChevronLeft} />
//         </button>
//     );

//     const NextArrow = ({ onClick }) => (
//         <button className="slick-arrow slick-next" onClick={onClick}>
//             <FontAwesomeIcon icon={faChevronRight} />
//         </button>
//     );

//     return (
//         <div>
//             <div className="container-fluid">
//                 <div className="container">
//                     <div className="row">
//                         <h3 className="text-center mt-5" style={{ color: '#dd0c2c' }}>
//                             Vista Gallery
//                         </h3>
//                         <div className="line"></div>
//                         <div className="slider-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
//                             <Slider {...settings}>
//                                 <div className='col-md-4'>
//                                     <img src={gallary1} className="img-fluid rounded-4" alt="Gallery Image 1" style={{ margin: "20px", width: "100%" }} />
//                                 </div>
//                                 <div className='col-md-4'>
//                                     <img src={gallary2} className="img-fluid rounded-4" alt="Gallery Image 2" style={{ margin: "20px", width: "100%" }} />
//                                 </div>
//                                 <div className='col-md-4'>
//                                     <img src={gallary3} className="img-fluid rounded-4" alt="Gallery Image 3" style={{ margin: "20px", width: "100%" }} />
//                                 </div>
//                                 <div className='col-md-4'>
//                                     <img src={gallary4} className="img-fluid rounded-4" alt="Gallery Image 4" style={{ margin: "20px", width: "100%" }} />
//                                 </div>
//                                 <div className='col-md-4'>
//                                     <img src={gallary5} className="img-fluid rounded-4" alt="Gallery Image 5" style={{ margin: "20px", width: "100%" }} />
//                                 </div>
//                             </Slider>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import gallary1 from '../Images/gallary-img1.jpg';
import gallary2 from '../Images/gallary-img-2.jpg';
import gallary3 from '../Images/gallery_img3.jpg';
import gallary4 from '../Images/gallary5.jpg';
import gallary5 from '../Images/gallery_img4.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Gallary() {
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
            <button className="slick-arrow slick-prev rounded-circle " onClick={onClick}  style={{ background: "#dd0c2c",display:"block", height:"50px",width:"50px",zIndex:"1", position:"absolute" }}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        );
    }

    function NextArrow({ onClick }) {
        return (
            <button className="slick-arrow slick-next rounded-circle "  onClick={onClick} style={{ background: "#dd0c2c",display:"block", height:"50px",width:"50px" }}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        );
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <h3 className="text-center mt-5" style={{ color: '#dd0c2c' }}>
                            Vista Gallery
                        </h3>
                        <div className="line mb-5"></div>
                        <div className="slider-container " style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                            <Slider {...settings}>
                                <div >
                                    <img src={gallary1} className="img-fluid rounded-4" alt="Gallery Image 1" style={{  width: "100%" }} />
                                </div>
                                <div >
                                    <img src={gallary2} className="img-fluid rounded-4" alt="Gallery Image 2" style={{  width: "100%" }} />
                                </div>
                                <div >
                                    <img src={gallary3} className="img-fluid rounded-4" alt="Gallery Image 3" style={{  width: "100%" }} />
                                </div>
                                <div >
                                    <img src={gallary4} className="img-fluid rounded-4" alt="Gallery Image 4" style={{  width: "100%" }} />
                                </div>
                                <div >
                                    <img src={gallary5} className="img-fluid rounded-4" alt="Gallery Image 5" style={{  width: "100%" }} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
