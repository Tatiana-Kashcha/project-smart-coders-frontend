import { AuthSection } from 'components/AuthSection/AuthSection';
import { Description } from 'components/Description/Description';
import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
    </>
  );
};

export default MainPage;
