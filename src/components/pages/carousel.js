import React, { Component } from 'react';
import ecom1 from "../../../public/images/slides/ecom1.png";
import ecom2 from "../../../public/images/slides/ecom2.jpg"
class Carousel extends Component {
    render() {
        return (
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={ecom1} alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={ecom1} alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={ecom1} alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
            
        );
    }
}

export default Carousel;