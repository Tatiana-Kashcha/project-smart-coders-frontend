import { AuthSection } from 'components/AuthSection/AuthSection';
import { Description } from 'components/Description/Description';
import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';

// MainPage
// імпорт компонентів для перевірки стилів, поки так:
import { LogoutBtn } from 'components/LogoutBtn/LogoutBtn';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />

      {/* для перевірки стилів */}
      <div>
        <LogoutBtn />
      </div>
    </>
  );
};

export default MainPage;
