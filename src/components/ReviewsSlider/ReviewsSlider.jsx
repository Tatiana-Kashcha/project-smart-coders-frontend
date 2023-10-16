import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AiFillStar } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';

import { getAllReviews } from 'redux/reviews/operations';
import { selectReviews } from 'redux/reviews/selectors';

import { ReactComponent as PrevArrow } from '../../icons/arrow-left.svg';
import { ReactComponent as NextArrow } from '../../icons/arrow-right.svg';

import * as s from './ReviewsSlider.styled';

export const ReviewsSlider = () => {
  const dispatch = useDispatch();
  const sliderRef = useRef();

  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

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

  const sliderConfig = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '-10px',

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return reviews.length > 0 ? (
    <s.SectionMod>
      <s.ContainerModify>
        <s.Title>Reviews</s.Title>
        <Slider ref={sliderRef} {...sliderConfig}>
          {reviews.map(review => (
            <div key={review._id}>
              <s.Slides>
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

                  <s.UserReview>{review.comment}</s.UserReview>
                </s.UserContainer>
              </s.Slides>
            </div>
          ))}
        </Slider>
        <s.ArrowButtonContainer>
          <s.ArrowButton onClick={handlePrevClick}>
            <s.ArrowBtnWrapper>
              <PrevArrow />
            </s.ArrowBtnWrapper>
          </s.ArrowButton>
          <s.ArrowButton onClick={handleNextClick}>
            <s.ArrowBtnWrapper>
              <NextArrow />
            </s.ArrowBtnWrapper>
          </s.ArrowButton>
        </s.ArrowButtonContainer>
      </s.ContainerModify>
    </s.SectionMod>
  ) : null;
};
