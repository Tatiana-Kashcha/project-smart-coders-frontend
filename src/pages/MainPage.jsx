import { AuthSection } from 'components/AuthSection/AuthSection';
import { Description } from 'components/Description/Description';
// import { MonthCalendarHead } from 'components/ChoosedMonth/MonthCalendarHead/MonthCalendarHead';

// import { MonthCalendarHead } from '../components/ChoosedMonth/MonthCalendarHead/MonthCalendarHead';
import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';

export default function MainPage() {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      {/* <MonthCalendarHead /> */}
    </>
  );
}
