import styled from 'styled-components';

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
  width: 32px;
  height: 32px;
  border-radius: 44px;
  border: 1.8px solid #3e85f3;
  background-color: #3e85f3;

  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    font-family: Inter;
    font-size: 18px;
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-position: 50% 50%;
  border-radius: 44px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  
`;
