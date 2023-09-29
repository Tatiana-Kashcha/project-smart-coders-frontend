import {
  Text,
  NumberWrap,
  Number,
  Wrapper,
  StyledLink,
  ContentWrap,
  RocketStyled,
} from './NotFoundPage.styled';

// import goose1xMobPng from '../../images/mobile/404-goose-811x.png';
// import goose2xMobPng from '../../images/mobile/404-goose-1622x.png';
// import goose2xDeskPng from '../../images/desktop/404-goose-3562x.png';
// import goose1xDeskPng from '../../images/desktop/404-goose-1781x.png';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <ContentWrap>
        <NumberWrap>
          <Number>4</Number>
          <RocketStyled />
          {/* <picture>
            <source
              srcSet={`${goose1xDeskPng} 1x, ${goose2xDeskPng} 2x`}
              media="(min-width: 768px)"
              style={{ width: '367px', height: '445px' }}
            />
            <source
              srcSet={`${goose1xMobPng} 1x, ${goose2xMobPng} 2x`}
              media="(min-width: 375px)"
              style={{ width: '166px', height: '202px' }}
            />

            <img src={`${goose1xMobPng}`} alt="Goose" />
          </picture> */}
          <Number>4</Number>
        </NumberWrap>
        <Text>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </Text>
        <StyledLink to="/">Back to home</StyledLink>
      </ContentWrap>
    </Wrapper>
  );
};

export default NotFoundPage;
