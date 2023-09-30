import { RegisterForm } from "components/RegisterForm/RegisterForm";

export default function MainPage() {
  return (
    <>
      <h1>
        Please log in{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <button>Login</button>
      <button>logup</button>
      <RegisterForm/>
    </>
  );
}
