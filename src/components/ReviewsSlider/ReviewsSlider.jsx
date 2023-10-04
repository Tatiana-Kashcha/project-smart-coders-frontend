import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSwiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import { AiFillStar } from 'react-icons/ai';
import * as s from './ReviewsSlider.styled';

import ReactStars from 'react-rating-stars-component';
import { getAllReviews } from 'redux/reviews/operations';

import { ReactComponent as PrevArrow } from '../../icons/arrow-left.svg';
import { ReactComponent as NextArrow } from '../../icons/arrow-right.svg';
// import { ReactComponent as UserAvatarIcon } from '../../icons/user.svg';

// import { selectUser } from 'redux/auth/selectors';

import 'swiper/css';
import 'swiper/css/navigation';

export const ReviewsSlider = () => {
  const swiper = useSwiper();
  const reviews = useSelector(state => state.reviews.items);
  const dispatch = useDispatch();
  const [slidesPerView, setSlidesPerView] = useState(2);

  //   const user = useSelector(selectUser);
  // const firstLeter = user.name.slice(0, 1);
  // const bigFirstLeter = firstLeter.toUpperCase();

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const starsConfig = {
    size: 14,
    count: 5,
    isHalf: false,
    edit: false,
    value: 1,
    color: '#CEC9C1',
    activeColor: '#FFAC33',
    emptyIcon: <AiFillStar style={{ marginRight: '10px' }} />,
    filledIcon: <AiFillStar style={{ marginRight: '10px' }} />,
  };

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    // const avatar = user.url;

    <section>
      <s.ContainerModify>
        <s.Title>Reviews</s.Title>
        <s.StyledSwiper
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          rewind={true}
          slidesPerView={slidesPerView}
          spaceBetween={24}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          modules={[Autoplay, Navigation]}
        >
          <s.ReviewContainer>
            {reviews.map(review => (
              <s.SwiperSlides key={review._id}>
                <s.UserContainer>
                  <s.UserInfo>
                    {/* <s.UserAvatar> */}
                    <s.Elipse>N</s.Elipse>
                    {/* <UserAvatarIcon /> */}
                    {/* {avatar === ' ' ? (
        <s.Elipse>{bigFirstLeter}</s.Title>
      ) : (
        <s.Elipse>{avatar}</s.Elipse>
      )} */}
                    {/* </s.UserAvatar> */}
                    <s.UserHeadInfo>
                      <s.UserName>UserName</s.UserName>
                      <s.CustomStarContainer>
                        <ReactStars {...starsConfig} value={review.rating} />
                      </s.CustomStarContainer>
                    </s.UserHeadInfo>
                  </s.UserInfo>
                  <s.UserReview>{review.comment}</s.UserReview>
                </s.UserContainer>
              </s.SwiperSlides>
            ))}
          </s.ReviewContainer>

          <div>
            <s.ArrowButton className="prev" onClick={handlePrevClick}>
              <PrevArrow />
            </s.ArrowButton>
            <s.ArrowButton className="next" onClick={handleNextClick}>
              <NextArrow />
            </s.ArrowButton>
          </div>
        </s.StyledSwiper>
      </s.ContainerModify>
    </section>
  );
};
