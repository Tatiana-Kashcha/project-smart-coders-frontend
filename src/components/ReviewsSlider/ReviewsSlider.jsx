import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useSwiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import { AiFillStar } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';

import { getAllReviews } from 'redux/reviews/operations';
import { selectReviews } from 'redux/reviews/selectors';

import { ReactComponent as PrevArrow } from '../../icons/arrow-left.svg';
import { ReactComponent as NextArrow } from '../../icons/arrow-right.svg';

import * as s from './ReviewsSlider.styled';
import 'swiper/css';
import 'swiper/css/navigation';

export const ReviewsSlider = () => {
  const dispatch = useDispatch();

  const swiper = useSwiper();
  const reviews = useSelector(selectReviews);

  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1440) {
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

  return reviews.length > 0 ? (
    <s.SectionMod>
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
                    {review.owner.avatarURL === '' ? (
                      <s.Elipse>
                        {review.owner.name.slice(0, 1).toUpperCase()}
                      </s.Elipse>
                    ) : (
                      <s.Elipse>
                        {<s.Avatar src={review.owner.avatarURL} alt="avatar" />}
                      </s.Elipse>
                    )}
                    <s.UserHeadInfo>
                      <s.UserName>{review.owner.name}</s.UserName>
                      <s.CustomStarContainer>
                        <ReactStars {...starsConfig} value={review.rating} />
                      </s.CustomStarContainer>
                    </s.UserHeadInfo>
                  </s.UserInfo>

                  <s.UserReview
                    text={review.comment}
                    maxLine="3"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                  />
                </s.UserContainer>
              </s.SwiperSlides>
            ))}
          </s.ReviewContainer>

          <s.ArrowButtonContainer>
            <s.ArrowButton className="prev" onClick={handlePrevClick}>
              <s.ArrowBtnWrapper>
                <PrevArrow />
              </s.ArrowBtnWrapper>
            </s.ArrowButton>
            <s.ArrowButton className="next" onClick={handleNextClick}>
              <s.ArrowBtnWrapper>
                <NextArrow />
              </s.ArrowBtnWrapper>
            </s.ArrowButton>
          </s.ArrowButtonContainer>
        </s.StyledSwiper>
      </s.ContainerModify>
    </s.SectionMod>
  ) : null;
};
