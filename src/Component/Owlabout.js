import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Owlabout() {
  const options = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true,
    dots: false,
  };
  const style1 = {
    height: "400px",
    width: "250px",
     
     
  };
  return (
    <div>
      <OwlCarousel className="owl-theme" nav="true" margin={4} {...options}>
        <div>
          <img src="/Images/redlogo4.png" style={style1} />
        </div>
        <div>
          <img src="/Images/redlogo5.png" style={style1} />
        </div>
        <div>
          <img src="/Images/redlogo6.png" style={style1} />
        </div>
        <div>
          <img src="/Images/card1.png" style={style1} />
        </div>
        <div>
          <img src="/Images/card2.png" style={style1} />
        </div>
        <div>
          <img src="/Images/card3.png" style={style1} />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Owlabout;
