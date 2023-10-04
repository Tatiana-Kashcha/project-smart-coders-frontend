import styled from 'styled-components';
// import { Form, ErrorMessage } from 'formik';
// import { globalTheme } from 'theme';
import { Container } from 'stylesheet/Container.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export const ContainerModify = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //   height: 100%;
`;

export const Title = styled.h2`
  color: var(--blue1, #3e85f3);
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  text-transform: uppercase;

  margin-bottom: 40px;

  //   background-color: ${props => props.theme.colors.modalWindow};

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  padding: 24px 20px 24px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  //   width: 335px;
  height: 72px;

  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 64px;
`;

export const SwiperSlides = styled(SwiperSlide)`
  display: flex;

  align-items: center;

  text-align: center;
  font-size: 18px;
  background: #fff;

  box-sizing: border-box;
  width: 100%;

  padding: 24px 20px 24px 24px;
  margin-bottom: 8px;
  width: 335px;

  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
`;

export const ArrowButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap 25px;
`;

export const ArrowButton = styled.button`
  width: 50px;
  height: 50px;

  border: none;
  cursor: pointer;

  background-color: transparent;
  color: #111111;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// export const UserAvatar = styled.div`
//   align-items: start;
//   width: 50px;
//   height: 50px;
//   border-radius: 50px;
//   border: 3px solid #111;
//   // background: url(<path-to-image>), lightgray 50% / cover no-repeat;
// `;

export const UserInfo = styled.div`
  display: flex;
  gap: 18px;
`;

export const UserName = styled.h3`
  color: #343434;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 100% */
`;

export const UserHeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
  margin-bottom: 24px;
`;

export const UserReview = styled.h3`
  width: 287px;
  height: auto;

  border-radius: 8px;
  border: transparent;
  //   overflow: hidden;

  height: 54px;
  color: rgba(17, 17, 17, 0.7);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  text-align: left;
`;

export const Elipse = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;

  border: 3px solid #111;

  font-family: Inter;
  font-size: 100%;
  font-weight: 600;
  font-size: 40px;
  color: ${props => props.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    // font-family: Inter;
    // font-size: 18px;
  }
`;

export const CustomStarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
