import styled from 'styled-components';

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.colors.primaryText};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const BurgerBtn = styled.button`
  background-color: transparent;
  border: none;

  width: 32px;
  height: 32px;

  color: ${props => props.theme.colors.primaryText};

  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Division = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

export const SubDivision = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ThemeToggleBtn = styled.button`
  margin-right: 14px;
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  svg {
    fill: #3e85f3;
  }

  @media screen and (min-width: 678px) {
    width: 32px;
    height: 32px;
  }
`;
