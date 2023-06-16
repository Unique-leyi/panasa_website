import { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

 function SectionGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
     
        <SwiperSlide>
          <Image src={require('../../assets/images/scrabble_1.png')} alt={`GSF gallery`} className="modal-content" width={100} height={100} objectFit="cover" layout="fill"/>
        </SwiperSlide>

         <SwiperSlide>
          <Image src={require('../../assets/images/scrabble_2.png')} alt={`GSF gallery`} className="modal-content" width={100} height={100} objectFit="cover" layout="fill"/>
        </SwiperSlide>

         <SwiperSlide>
          <Image src={require('../../assets/images/scrabble_3.png')} alt={`GSF gallery`} className="modal-content" width={100} height={100} objectFit="cover" layout="fill"/>
        </SwiperSlide>

         <SwiperSlide>
          <Image src={require('../../assets/images/scrabble_4.jpg')} alt={`GSF gallery`} className="modal-content" width={100} height={100} objectFit="cover" layout="fill"/>
        </SwiperSlide>

      </Swiper>



      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
         <SwiperSlide>
          <Image src={require('../../assets/images/scrabble_1.png')} alt={`GSF gallery`} className="modal-content" width={100} height={100} objectFit="cover" layout="fill"/>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default SectionGallery
