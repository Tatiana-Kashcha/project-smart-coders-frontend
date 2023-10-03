// export default function MainPage() {
//   return (
//     <>
//       <h1>
//         Please log in{' '}
//         <span role="img" aria-label="Greeting icon">
//           💁‍♀️
//         </span>
//       </h1>
//       <button>Login</button>
//       <button>logup</button>
//     </>
//   );
// }

// import SideBar from 'components/SideBar/SideBar';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { MainLayout } from './MainLayout/MainLayout';

export default function MainPage() {
  return (
    <>
      <MainLayout />
      <LoginForm />
    </>
  );
}

// pedro15@gmail.com
// pedro12345678
