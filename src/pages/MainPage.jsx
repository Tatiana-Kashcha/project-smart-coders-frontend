import { AuthSection } from 'components/AuthSection/AuthSection';
import { Description } from 'components/Description/Description';
import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';

// MainPage
// імпорт компонентів для перевірки стилів, поки в div:
import { LogoutBtn } from 'components/LogoutBtn/LogoutBtn';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <div>
        <LogoutBtn />
      </div>
    </>
  );
};

export default MainPage;
