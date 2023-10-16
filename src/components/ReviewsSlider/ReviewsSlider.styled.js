import styled from 'styled-components';
import { globalTheme } from 'theme';
import { Container } from 'stylesheet/Container.styled';

export const SectionMod = styled.section`
  padding-bottom: 64px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    padding-bottom: 118px;
  }
`;

export const ContainerModify = styled(Container)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 580px;
    padding: 0;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    width: 1184px;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;

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

export const Slides = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  width: 335px;
  height: 194px;
  padding: 24px 20px 24px 24px;
  margin-bottom: 8px;

  border-radius: 8px;
  border: 1px solid ${globalTheme.colors.reviewsSliderBorder};
  background-color: ${globalTheme.colors.secondBackground};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    padding: 32px;
    height: 187px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 580px;
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

export const UserReview = styled.p`
  width: 100%;
  height: 72px;

  overflow: hidden;
  overflow-y: scroll;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  text-align: left;

  color: ${globalTheme.colors.reviewsSliderText};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    padding-left: 68px;
    height: 54px;
  }
`;

export const Elipse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 50px;
  height: 50px;

  font-size: 22px;
  font-weight: 600;

  color: ${globalTheme.colors.black};
  border-radius: 50%;
  background-color: ${globalTheme.colors.primary};
`;

export const Avatar = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const CustomStarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
