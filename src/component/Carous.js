import { Carousel } from "react-bootstrap";
import B from '../img/B.jpg'
import A from "../img/A.jpg"
import C from '../img/C.jpg'

const Carous =()=>{ return (<div><Carousel>
  
    <Carousel.Item className="coursitem" >
      <img
        className="d-block w-100"
        src={A}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>LAKE SCHRECKSEE, BAVARIA</h3>
        <p>The first stop of this promised-to-be epic road trip? Rakotzbrücke, This stunning bridge, located in Saxony in North Germany.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="coursitem">
      <img
        className="d-block w-100"
        src={B}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>SAARSCHLEIFE, METTLACH</h3>
        <p>Also known as Saar Loop, Saarchleife refers to the spectacular natural spot where the river Saar does a loop around the forest.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="coursitem">
      <img
        className="d-block w-100"
        src={C}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>BASTEI, SAXONY</h3>
        <p>As a stunning rock formation at 194 metres high, Bastei is undoubtedly the most impressive site in Saxony’s National Park.</p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel></div>)}
  export default Carous
