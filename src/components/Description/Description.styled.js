import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    padding: 30px 0;
  }
`;

export const List = styled.ul`
  li:not(:last-child) {
    margin: 0 0 40px 0;
  }

  li:nth-child(2n) {
    div {
      @media screen and ((min-width: 768px) and (max-width: calc(1440px - 0.5px))) {
        margin-left: auto;
      }
    }

    @media screen and (min-width: 1440px) {
      flex-direction: row-reverse;
    }
  }
`;

export const Item = styled.li`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const ContentWrapper = styled.div`
  margin: 0 0 30px 0;

  @media screen and (min-width: 768px) {
    width: 33.33%;
  }

  @media screen and (min-width: 1440px) {
    width: 20%;
  }
`;

export const SpanNumber = styled.span`
  display: block;

  margin: 0 0 10px 0;

  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -4px;

  color: #3e85f3;
`;

export const FirstText = styled.h2`
  display: table;

  margin: 0 0 8px 0;

  padding: 4px 16px;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;

  border-radius: 44px;

  color: #3e85f3;
  background-color: #dcebf7;
`;

export const SecondText = styled.h2`
  margin: 0 0 8px 0;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;

  color: #171820;
`;

export const Description = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  color: rgba(17, 17, 17, 0.9);
`;
