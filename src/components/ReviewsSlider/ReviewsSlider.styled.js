import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import LinesEllipsis from 'react-lines-ellipsis';

import { globalTheme } from 'theme';
import { Container } from 'stylesheet/Container.styled';

import 'swiper/css';
import 'swiper/css/navigation';

export const SectionMod = styled.section`
  margin-bottom: 64px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    margin-bottom: 118px;
  }
`;

export const ContainerModify = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 580px;
    padding: 0;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    width: 1184px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;

  font-size: 40px;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;

  color: ${globalTheme.colors.primary};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin-bottom: 50px;
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 24px;
  height: 72px;

  border-radius: 8px;
  border: 1px solid ${globalTheme.colors.reviewsSliderBorder};
`;

export const StyledSwiper = styled(Swiper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const SwiperSlides = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  width: 100%;
  padding: 24px 20px 24px 24px;
  margin-bottom: 8px;

  border-radius: 8px;
  border: 1px solid ${globalTheme.colors.reviewsSliderBorder};
  background-color: ${globalTheme.colors.secondBackground};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    padding: 32px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    margin-bottom: 32px;
  }
`;

export const ArrowButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ArrowBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  color: ${globalTheme.colors.black};
`;

export const ArrowButton = styled.button`
  width: 50px;
  height: 50px;

  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 61px;
    height: 61px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
`;

export const UserName = styled.h3`
  color: ${globalTheme.colors.text};
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
`;

export const UserHeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;

export const UserReview = styled(LinesEllipsis)`
  width: 100%;
  height: 54px;

  border-radius: 8px;
  border: transparent;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  text-align: left;

  color: ${globalTheme.colors.reviewsSliderText};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    padding-left: 68px;
  }
`;

export const Elipse = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  font-size: 22px;
  font-weight: 600;

  color: ${globalTheme.colors.black};
  border-radius: 50px;
  border: 1px solid transparent;
  background-color: ${globalTheme.colors.primary};
`;

export const Avatar = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: 50% 50%;

  border-radius: 44px;
`;

export const CustomStarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
