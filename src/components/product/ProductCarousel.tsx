import styled from 'styled-components';
import { Carousel } from "react-responsive-carousel";

function ProductCarousel() {
  return (
    <CarouselBox>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={8000}
      >
        <CarouselList>
          <CarouselImg src='./images/product1.jpg' />
        </CarouselList>
        <CarouselList>
          <CarouselImg src='./images/mintmin.jpg' />
        </CarouselList>
      </Carousel>
    </CarouselBox>
  )
}

export default ProductCarousel;

const CarouselBox = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
`;

const CarouselList = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  /* overflow: hidden; */
`;

const CarouselImg = styled.img`
  height: 300px;
  /* overflow: hidden; */
  object-fit: contain;
`;