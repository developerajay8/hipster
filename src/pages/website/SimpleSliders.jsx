import React from "react";
import Slider from "react-slick";
import Container4 from "../../components/Container4";

function SimpleSliders() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Container4>
                <Slider className="" {...settings}>
                    <div className="border grid grid-cols-2">
                        <h3 className=" col-span-2 border">AJAY</h3>
                        <h3 className=" col-span-2 border">AJAY</h3>
                    </div>
                    <div className="border">
                        <h3 className=" border">AJAY</h3>
                        <h3 className=" border">AJAY</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                </Slider>
            </Container4>
        </div>
    );
}

export default SimpleSliders;
