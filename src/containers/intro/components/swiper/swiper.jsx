import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import laurenleft from './assets/lauren_left.svg'
import laurenright from './assets/lauren_right.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './swiper.scss';
import { Autoplay, Pagination} from "swiper";





export default function Swiper_bar() {
    return (
        <>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true
            }}
            modules={[Autoplay ,Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><div className="swiper__firstslide">
            <div className="swiper__firstslide__promo">
                <a className='swiper__firstslide__cysec'>
                    <div className='swiper__firstslide__cysec__title'>CySEC</div>
                    <div style={{'font-size': '10px'}}>
                        <div>
                            <span>Regulated</span>
                        </div>
                        <div>
                            <b>LICENCE 247/14</b>
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper__firstslide__text">
                <span>
                    <b>Licensed and regulated</b> since 2014, IQ Option is a broker to
                    millions of loyal clients all over the world 
                </span>
            </div>
            <div className="swiper__buttons">
                <a className="swiper__buttons__btn">More about regulation</a>
            </div>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className="swiper__secondslide">
            <div className="swiper__secondslide__promo">
              <div className="swiper__secondslide__promo__slide">
                  <img src={laurenleft} alt="" className="swiper__secondslide__promo__lauren"/>
                <div className="swiper__award">
                  <div>Century Internatiol Quality Gold ERA Awards</div>
                  <div className="swiper__secondslide__promo__notise">Business Initiative Direction Group</div>
                </div>
                  <img src={laurenright} alt="" className="swiper__secondslide__promo__lauren"/>
              </div>
              <div className="swiper__secondslide__promo__slide">
                  <img src={laurenleft} alt="" className="swiper__secondslide__promo__lauren"/>
                <div className="swipre__award">
                  <div>Best Technology Application</div>
                  <div className="swiper__secondslide__promo__notise" style={{'paddingTop':'31px'}}>The Web Marketing Application</div>
                </div>
                  <img src={laurenright} alt="" className="swiper__secondslide__promo__lauren"/>
              </div>
            </div>
            <div className="swiper__secondslide__text">
                <span>
                    <b>Award-winning broker</b> recognized and praised by the most respected experts of the industry. 
                </span>
            </div>
            <div className="swiper__buttons">
                <a className="swiper__buttons__btn">View all avards</a>
            </div>
        </div>
        </SwiperSlide>
          </Swiper>
        </>
      );
    }