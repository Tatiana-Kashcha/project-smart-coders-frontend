import { ReusePicture } from 'reuse';
import {
  createCalendarImgObj,
  createSidebarImgObj,
  createAllInOneImgObj,
} from './createImgObj';

import { Container } from 'stylesheet/Container.styled';
import * as s from './Description.styled';

const arrayOfBlocksInSection = [
  {
    number: '1.',
    firstText: 'calendar',
    secondText: 'view',
    description: `GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.`,
    pictures: createCalendarImgObj,
    imgAlt: 'calendar view in the application',
  },
  {
    number: '2.',
    firstText: '',
    secondText: 'sidebar',
    description:
      'GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.',
    pictures: createSidebarImgObj,
    imgAlt: 'sidebar view in the application',
  },
  {
    number: '3.',
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
    <s.SectionStyled>
      <Container>
        <s.List>
          {arrayOfBlocksInSection.map(item => {
            const {
              number,
              firstText,
              secondText,
              description,
              pictures,
              imgAlt,
            } = item;
            return (
              <s.Item key={number}>
                <s.ContentWrapper>
                  <s.SpanNumber>{number}</s.SpanNumber>
                  {firstText && <s.FirstText>{firstText}</s.FirstText>}
                  <s.SecondText>{secondText}</s.SecondText>
                  <s.Description>{description}</s.Description>
                </s.ContentWrapper>
                <ReusePicture pictures={pictures} imgAlt={imgAlt} />
              </s.Item>
            );
          })}
        </s.List>
      </Container>
    </s.SectionStyled>
  );
};
