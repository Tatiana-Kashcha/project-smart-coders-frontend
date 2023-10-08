import { Vortex } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderStyle>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          '#FFD2DD',
          '#3E85F3',
          '#FFD2DD',
          '#3E85F3',
          '#3E85F3',
          '#FFD2DD',
        ]}
      />
    </LoaderStyle>
  );
};

export default Loader;
