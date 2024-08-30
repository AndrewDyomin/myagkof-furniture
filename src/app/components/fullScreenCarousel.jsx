"use client";

import Fancybox from "./fancybox";
import Carousel from "./carousel";

export const FullScreenCarousel = ({ images }) => {

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <Carousel
        options={{
          infinite: false,
        }}
      >
        {images.map((i) => (
          <div
            key={i}
            className="f-carousel__slide"
            data-fancybox="gallery"
            data-src={i}
            data-thumb-src={i}
          >
            <img
              src={i}
              width={'100%'}
              height={'auto'}
              alt={i}
            />
          </div>
        ))}
      </Carousel>
    </Fancybox>
  );
};
