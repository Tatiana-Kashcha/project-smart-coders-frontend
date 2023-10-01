// import { theme } from 'theme';

const ReusePicture = ({
  pictures: {
    startGooseMobile1xWebp,
    startGooseMobile2xWebp,
    startGooseMobile1xPng,
    startGooseMobile2xPng,
    startGooseTablet1xWebp,
    startGooseTablet2xWebp,
    startGooseTablet1xPng,
    startGooseTablet2xPng,
    startGooseDesktop1xWebp,
    startGooseDesktop2xWebp,
    startGooseDesktop1xPng,
    startGooseDesktop2xPng,
  },
}) => {
  return (
    <picture>
      {/* For mobile devices */}
      <source
        media={`(max-width: calc(768px - 0.5px))`}
        srcSet={`${startGooseMobile1xWebp} 1x, ${startGooseMobile2xWebp} 2x`}
        type="image/webp"
      />
      <source
        media={`(max-width: calc(768px - 0.5px))`}
        srcSet={`${startGooseMobile1xPng} 1x, ${startGooseMobile2xPng} 2x`}
        type="image/png"
      />
      {/* For tablets */}
      <source
        media={`(min-width: 768px) and (max-width: calc(1440px - 0.5px))`}
        srcSet={`${startGooseTablet1xWebp} 1x, ${startGooseTablet2xWebp} 2x`}
        type="image/webp"
      />
      <source
        // media={`(min-width: 768px) and (max-width: calc(1440px - 0.5px))`}
        srcSet={`${startGooseTablet1xPng} 1x, ${startGooseTablet2xPng} 2x`}
        type="image/png"
      />
      {/* For desktops */}
      <source
        media={`(min-width: 768px)`}
        srcSet={`${startGooseDesktop1xWebp} 1x, ${startGooseDesktop2xWebp} 2x`}
        type="image/webp"
      />
      <source
        media={`(min-width: 768px)`}
        srcSet={`${startGooseDesktop1xPng} 1x, ${startGooseDesktop2xPng} 2x`}
        type="image/png"
      />
      {/* Default */}
      <img src={startGooseMobile1xPng} alt="Goose logo" />
    </picture>
  );
};

export default ReusePicture;
