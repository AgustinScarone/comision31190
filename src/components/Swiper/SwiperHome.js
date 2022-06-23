import { Navigation, Pagination, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
    return (
    <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
        clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper-container"
        >
        <SwiperSlide style ={ {backgroundImage: "url('./img/locations.jpg')" } } className="swiper-slide">
            <h1>PEDÍ AHORA</h1>
            <Link  to='/menu' className="button">MIRÁ EL MENÚ</Link>
        </SwiperSlide>
        <SwiperSlide style ={ {backgroundImage: "url('./img/contact.jpg')" } }>
            Slide 2
        </SwiperSlide>
    </Swiper>
    );
};