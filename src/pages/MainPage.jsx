import { AuthSection } from 'components/AuthSection/AuthSection';
import { Description } from 'components/Description/Description';
import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';

import Header from 'components/Header/Header';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      {/* <Header />
      <NotFoundPage /> */}
    </>
  );
};

export default MainPage;
