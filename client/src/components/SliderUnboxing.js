import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Css/SliderUnboxing.css";
import { Pagination, Navigation } from "swiper";
import  SliderUnboxingSlide  from "./SlideUnboxingSlide";

const SliderUnboxing =  () => {
  return(
    <div className='SliderUnboxing py-5'>
        <h2 className='py-4'>UNBOXING & REVIEWS</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        // loop={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431341}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"GEMS Air3 Pro : AptX Adaptive & Noise Cancelling for $59!"}
        title={"GAMESKY!"}/>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431342}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"GEMS Free2 Classic - THE BEST DEAL IN WIRELESS EARBUDS - $18!"}
        title={"FLOSSY CARTER!"}
        />

        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431343}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"Their Best Bud Yet! GEMS Free 2 Classic"}
        title={"PICKY AUDIO!"}
        />
        </SwiperSlide>
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431345}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"The NEW KING under $30! 👑 GEMS Free2 Classic"}
        title={"EL JEFE REVIEWS!"}
        />
        </SwiperSlide>
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431345}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"A Steal At This Price! : The NEW GEMS Free2 Classic"}
        title={"GAMESKY!"}
        />
        </SwiperSlide>
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431345}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"GEMS Free2 Classic | WHO WANTS FREE EARBUDS?"}
        title={"BRANON NO D!"}
        />
        </SwiperSlide>
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431345}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"Really THAT Impressive? 🤔 - GEMS Mini Pro Review"}
        title={"KENNETH TANAKA!"}
        />
        </SwiperSlide>
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431345}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"GEMS MINI Pro vs MINI // MIGHTY BUT STILL MINI"}
        title={"BRANON NO D!"}
        />
        </SwiperSlide>
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431345}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"GEMS Free2 Classic vs Mini - What's DIFFERENT?!"}
        title={"KENNETH TANAKA!"}
        />
        </SwiperSlide>
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431345}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"GEMS H1 vs Sonic vs 3SE - Dual Driver True Wireless Earbuds!"}
        title={"PICKY AUDIO!"}
        />
        </SwiperSlide>
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431345}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"My Top 5 Earbuds for Summer 2022!!"}
        title={"GAMESKY!"}
        />
        </SwiperSlide>
        <SwiperSlide className=''>
        <SliderUnboxingSlide 
        id={5431345}
        videoUrl={"https://www.youtube.com/embed/zur8Viw1N6g"}
        subtitle={"First Look! : GEMS TrueAir 2 True Wireless!"}
        title={"GAMESKY!"}
        />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderUnboxing;
