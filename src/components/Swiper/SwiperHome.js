import { Navigation, Pagination, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getBanners } from "../../services/firebase/firestore";
import { useFirestore } from '../../hooks/useFirestore'

import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {

    const { banners } = useFirestore(() => getBanners())

    return (
    <Swiper
        slidesPerView={1}
        spaceBetween={0}
        initialSlide={1}
        loop={true}
        pagination={{
        clickable: true,
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper-container"
        >
            {banners.map(prod => {
                return(
                    <SwiperSlide key={prod.id} style ={ {backgroundImage: `url('./img/${prod.img}')` } } className="swiper-slide">
                        <h1>{prod.title}</h1>
                        { prod.button 
                        ? <Link  to={`${prod.link}`} className="button">{prod.button}</Link>
                        : false
                        }
                    </SwiperSlide>
                )})
            }
    </Swiper>
    );
};