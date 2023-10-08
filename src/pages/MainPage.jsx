// import { AuthSection } from 'components/AuthSection/AuthSection';
// import { Description } from 'components/Description/Description';
// import { ReviewsSlider } from 'components/ReviewsSlider/ReviewsSlider';

import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';
import { TasksColumn } from 'components/TasksColumn/TasksColumn';

export default function MainPage() {
  return (
    <>
      {/* <AuthSection />
      <Description />
      <ReviewsSlider /> */}

      <TasksColumn />
      <TaskToolbar />
    </>
  );
}
