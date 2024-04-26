import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import './slider.css'

const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper h-[500px]">
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[500px] rounded-2xl' src={'https://i.ibb.co/QF4HtBn/aaa.jpg'} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='w-full h-[500px] rounded-2xl' src={'https://i.ibb.co/0jHtSNh/11.jpg'} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='w-full h-[500px] rounded-2xl' src={'https://i.ibb.co/TcVcJP4/maxresdefault.jpg'} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='w-full h-[500px] rounded-2xl' src={'https://i.ibb.co/w7YdNfT/712.jpg'} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='w-full h-[500px] rounded-2xl' src={'https://i.ibb.co/nqX8qjv/a.jpg'} alt="" />
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default Slider;