import React from "react";
import Slider from "react-slick";
import s1 from '../Images/s1.jpg';
import s2 from '../Images/s2.jpg';
import s3 from '../Images/s3.jpg';
import s4 from '../Images/s4.jpg';
import s5 from '../Images/s5.jpg';
import './Video.css'

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1, // Adjust the number of slides to show based on your design
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
            // Add more breakpoints and settings as needed
        ]
    };
    
    const sty = {
        maxWidth: "100%",
        height: "auto",
    };

    return (
        <div className="container">
            <div className="row w-0">
                <h2 className="mt-5 text-center" style={{ color: "#dd0c2c" }}>Vista Gallery</h2>

                <div className="line mb-4  "></div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img src={s1} alt="Slide 1" className="xyz" style={sty} />
                        </div>
                        <div>
                            <img src={s2} alt="Slide 2" className="xyz" style={sty} />
                        </div>
                        <div>
                            <img src={s3} alt="Slide 3" className="xyz" style={sty} />
                        </div>
                        <div>
                            <img src={s4} alt="Slide 4" className="xyz" style={sty} />
                        </div>
                        <div>
                            <img src={s5} alt="Slide 5" className="xyz" style={sty} />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default MultipleItems;
