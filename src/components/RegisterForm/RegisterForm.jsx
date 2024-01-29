import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h2 className={css.register_title}>
        Welcome! Before using you need to create a account:
      </h2>

      <form
        className={css.register_form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={css.register_label}>
          Username
          <input type="text" name="name" className={css.register_input} />
        </label>
        <label className={css.register_label}>
          Email
          <input type="email" name="email" className={css.register_input} />
        </label>
        <label className={css.register_label}>
          Password
          <input
            type="password"
            name="password"
            className={css.register_input}
          />
        </label>
        <button type="submit" className={css.register_button}>
          Register
        </button>
      </form>
    </>
  );
};
