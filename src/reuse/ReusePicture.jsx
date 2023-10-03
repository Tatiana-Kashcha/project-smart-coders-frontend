import { globalTheme } from 'theme';

const ReusePicture = ({
  pictures: {
    mobile1xWebp,
    mobile2xWebp,
    mobile1xPng,
    mobile2xPng,
    tablet1xWebp,
    tablet2xWebp,
    tablet1xPng,
    tablet2xPng,
    desktop1xWebp,
    desktop2xWebp,
    desktop1xPng,
    desktop2xPng,
  },
  imgAlt,
}) => {
  return (
    <picture>
      {/* For mobile devices */}
      <source
        media={`(max-width: calc(${globalTheme.breakpoints.tablet} - 0.5px))`}
        srcSet={`${mobile1xWebp} 1x, ${mobile2xWebp} 2x`}
        type="image/webp"
      />
      <source
        media={`(max-width: calc(${globalTheme.breakpoints.tablet} - 0.5px))`}
        srcSet={`${mobile1xPng} 1x, ${mobile2xPng} 2x`}
        type="image/png"
      />

      {/* For tablets */}
      <source
        media={`(min-width: ${globalTheme.breakpoints.tablet}) and (max-width: calc(${globalTheme.breakpoints.desktop} - 0.5px))`}
        srcSet={`${tablet1xWebp} 1x, ${tablet2xWebp} 2x`}
        type="image/webp"
      />
      <source
        media={`(min-width: ${globalTheme.breakpoints.tablet}) and (max-width: calc(${globalTheme.breakpoints.desktop} - 0.5px))`}
        srcSet={`${tablet1xPng} 1x, ${tablet2xPng} 2x`}
        type="image/png"
      />

      {/* For desktops */}
      <source
        media={`(min-width: ${globalTheme.breakpoints.desktop})`}
        srcSet={`${desktop1xWebp} 1x, ${desktop2xWebp} 2x`}
        type="image/webp"
      />
      <source
        media={`(min-width: ${globalTheme.breakpoints.desktop})`}
        srcSet={`${desktop1xPng} 1x, ${desktop2xPng} 2x`}
        type="image/png"
      />

      {/* Default */}
      <img src={mobile1xPng} alt={imgAlt} />
    </picture>
  );
};

export default ReusePicture;
