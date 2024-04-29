
import { Carousel, Image } from 'react-bootstrap';


export function Jumbotron() {
  return (
    <Carousel>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src="https://www.tidalelectricalservices.com/wp-content/uploads/2021/08/Benefits-of-a-Commercial-Generator.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Service</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src="https://www.valleypowersystems.com/wp-content/uploads/2019/06/shutterstock_489244378.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Professional</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src="https://www.miamiluxuryhomes.com/wp-content/uploads/2023/09/Brickell-Skyline-Downtown-Miami-at-Dusk.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Local</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}