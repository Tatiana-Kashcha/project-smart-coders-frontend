// import UserForm from 'components/UserForm/UserForm';
import { Outlet } from 'react-router-dom';

export default function Calendar() {
  return (
    <>
      <h1>Calendar</h1>
      <Outlet />
      {/* <UserForm /> */}
    </>
  );
}
