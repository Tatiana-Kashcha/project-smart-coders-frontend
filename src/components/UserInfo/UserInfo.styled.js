import styled from 'styled-components';
import { globalTheme } from 'theme';

export const Name = styled.p`
  margin-right: 8px;
  color: ${props => props.theme.colors.secondText};
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    margin-right: 14px;
    font-size: 18px;
    line-height: 1;
  }
`;

export const Elipse = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid ${globalTheme.colors.primary};
  background-color: ${globalTheme.colors.primary};

  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    font-size: 18px;
  }
`;

export const Avatar = styled.img`
  display: block;
  object-fit: cover;
  object-position: 50% 50%;
`;
