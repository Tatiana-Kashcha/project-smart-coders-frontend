import { ReusePicture } from 'reuse';
import {
  createCalendarImgObj,
  createSidebarImgObj,
  createAllInOneImgObj,
} from './createImgObj';

import { Container } from 'stylesheet/Container.styled';

// console.log(createAllInOneImgObj);

const arrayOfSection = [
  {
    number: '1',
    firstText: 'calendar',
    secondText: 'view',
    description: `GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.`,
    pictures: createCalendarImgObj,
    imgAlt: 'calendar view in the application',
  },
  {
    number: '2',
    firstText: '',
    secondText: 'sidebar',
    description:
      'GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.',
    pictures: createSidebarImgObj,
    imgAlt: 'sidebar view in the application',
  },
  {
    number: '3',
    firstText: 'all in',
    secondText: 'one',
    description:
      'GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.',
    pictures: createAllInOneImgObj,
    imgAlt: 'task view in the application',
  },
];

export const Description = () => {
  return (
    <section>
      <Container>
        <ul>
          {arrayOfSection.map(item => {
            const {
              number,
              firstText,
              secondText,
              description,
              pictures,
              imgAlt,
            } = item;
            return (
              <li key={number}>
                <span>{number}</span>
                <h2>{firstText}</h2>
                <h2>{secondText}</h2>
                <h3>{description}</h3>
                <ReusePicture pictures={pictures} imgAlt={imgAlt} />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
