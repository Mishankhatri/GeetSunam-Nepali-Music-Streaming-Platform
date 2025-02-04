import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiPlayCircle as BiPlay,
} from "react-icons/bi";

import PlaySong from "@/components/Player/PlaySong";

function RecentlyPlayedSlider({ musicList }) {
  const swiperRef = useRef();
  const prevBtnRef = useRef();
  const nextBtnRef = useRef();

  return (
    <div className="swiper-class">
      <div
        ref={prevBtnRef}
        onClick={() => swiperRef.current?.slidePrev()}
        className="swiper-btn swipe-prev">
        <BiChevronLeft />
      </div>
      <div
        ref={nextBtnRef}
        onClick={() => swiperRef.current?.slideNext()}
        className="swiper-btn swipe-next">
        <BiChevronRight />
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        grabCursor={true}
        onSwiper={(swiper) => {
          swiper.isBeginning === true &&
            prevBtnRef.current.classList.add("deactivate");
        }}
        onSlideChange={(swiper) => {
          nextBtnRef.current.classList.remove("deactivate");
          prevBtnRef.current.classList.remove("deactivate");

          if (swiper.isBeginning === true) {
            prevBtnRef.current.classList.add("deactivate");
          }

          if (swiper.isEnd === true) {
            nextBtnRef.current.classList.add("deactivate");
          }
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}>
        {musicList.map((value) => (
          <SwiperSlide key={value._id}>
            <PlaySong trackDetails={value.trackDetails}>
              <div className="music-container">
                <div className="play-icon-container">
                  <img
                    src={value.trackDetails.coverArt}
                    alt="thumbnail"
                    className="thumbnail-new"
                  />

                  <span className="play-icon">
                    <BiPlay />
                  </span>
                </div>

                <div className="container-artists">
                  <div className="song-name" title={value.trackDetails.title}>
                    {value.trackDetails.title}
                  </div>

                  <div className="song-artists">{value.artists.fullname}</div>
                </div>
              </div>
            </PlaySong>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecentlyPlayedSlider;
