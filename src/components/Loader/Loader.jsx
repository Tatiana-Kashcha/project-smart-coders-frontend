import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderStyle>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderStyle>
  );
};

export default Loader;
