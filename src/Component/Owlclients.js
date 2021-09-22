import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "reactstrap";

function Owlclients() {
  const options = {
    items: 4,
    nav: false,
    rewind: true,
    autoplay: true,
    dots: true,
     
  };
  const style1 = { height: "97px", width: "150px" };

  return (
    <div>
      <Container>
        <Row>
          <OwlCarousel className="owl-theme" nav="true" margin={4} {...options}>
            <div>
              <img style={style1} src="/clients/bescom.png" />
            </div>
            <div>
              <img style={style1} src="/clients/hikvision.png" />
            </div>
            <div>
              <img style={style1} src="/clients/git.bmp" />
            </div>
            <div>
              <img style={style1} src="/clients/mahaveer.png" />
            </div>
            <div>
              <img style={style1} src="/clients/mildstone.png" />
            </div>
            <div>
              <img style={style1} src="/clients/nikoo.png" />
            </div>
            <div>
              <img style={style1} src="/clients/sophos.png" />
            </div>
            <div>
              <img style={style1} src="/clients/sri venkat.jpg" />
            </div>
            <div>
              <img style={style1} src="/clients/urbanc.png" />
            </div>
            <div>
              <img style={style1} src="/clients/win world.png" />
            </div>
          </OwlCarousel>
        </Row>
      </Container>
    </div>
  );
}

export default Owlclients;
