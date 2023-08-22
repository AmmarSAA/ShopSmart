import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

function CrouselItem() {
  return (
    <Carousel interval={5001} fade={true}>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src="../images/crow.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sale Upto 70% Off</h3>
          <p style={{fontWeight: '500'}}>
            Get Discount On All Items Of High Quality
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src="../images/cro-new2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sale Upto 70% Off</h3>
          <p style={{fontWeight: '500'}}>
            Get Discount On All Items Of High Quality
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src="../images/cro2.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src="../images/cro5.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src="../images/crosn1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Sale Upto 70% Off</h3>
          <p style={{fontWeight: '500'}}>
            Get Discount On All Items Of High Quality
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr-img"
          src="../images/croc.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Sale Upto 70% Off</h3>
          <p style={{fontWeight: '500'}}>
            Get Discount On All Items Of High Quality
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CrouselItem;