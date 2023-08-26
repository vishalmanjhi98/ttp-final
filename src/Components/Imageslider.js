import React from 'react';
import '../index.css';
import image from "./Assets/hsptal.jpg"
import fristslide from "./Assets/fristslide.jpg"
import imagee from "./Assets/patent.jpg";

const Imageslider = () => {
  const hen = {
    background: 'linear-gradient(96deg, #4DDFFF 0%, #2898FF 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: 'Poppins',
    fontSize: '61.774px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '125.688%',
    textTransform: 'capitalize',
  };
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <br/>
    <br/>
    <br/>
    <div class="carousel-item active">
      <img style={{height:"600px", width:"90px"}} src={fristslide} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{
          color: "#FFF",
          textAlign: "center",
          fontWeight: '700',
          lineHeight: '125.688%',
          textTransform: "capitalize",
        }}>
      We Provide Total Health</h1>
        <p style={hen}>Care Services</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image} style={{height:"600px", width:"90px"}} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imagee} style={{height:"600px", width:"90px"}} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default Imageslider;
