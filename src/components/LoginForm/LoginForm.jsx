import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';
import { logIn } from '../../redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h2 className={css.login_title}>
        Welcome back! Please log in to access your account.
      </h2>
      <form
        className={css.login_form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={css.login_label}>
          Email
          <input type="email" name="email" className={css.login_input} />
        </label>
        <label className={css.login_label}>
          Password
          <input type="password" name="password" className={css.login_input} />
        </label>
        <button type="submit" className={css.login_button}>
          Log In
        </button>
      </form>
    </>
  );
};
