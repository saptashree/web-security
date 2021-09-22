import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "reactstrap";

function Owlslide() {
  const options = {
    items: 6,
    nav: true,
    rewind: true,
    autoplay: true,
    dots:false,
  };

  const style1 = { height: "80px", width: "80px" };

  return (
    <div>
        <Container>
        <Row>
      <OwlCarousel className="owl-theme" nav="true" margin={4} {...options}>
        <div>
          <img style={style1} src="/Images/slide1.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide2.png" />
        </div>

        <div>
          <img style={style1} src="/Images/slide3.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide4.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide5.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide7.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide8.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide9.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide10.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide11.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide12.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide13.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide14.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide15.png" />
        </div>
        <div>
          <img style={style1} src="/Images/slide16.png" />
        </div>
      </OwlCarousel>
      </Row></Container>
    </div>
  );
}

export default Owlslide;
