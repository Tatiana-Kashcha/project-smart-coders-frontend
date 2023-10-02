import { AuthSection } from 'components/AuthSection/AuthSection';
import { Description } from 'components/Description/Description';
import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';
// import UserForm from 'components/UserForm/UserForm';
const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      {/* <UserForm /> */}
    </>
  );
};

export default MainPage;
