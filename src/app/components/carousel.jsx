import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = dynamic(() => import('react-slick'), { ssr: false });

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  if (typeof window !== 'undefined') {
    return null
  }

  return (
      <SlickSlider {...settings}>
        {/* <div>
          <img src="/images/slide1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="/images/slide4.jpg" alt="Slide 4" />
        </div> */}
      </SlickSlider>
  );
};

export default Carousel;
