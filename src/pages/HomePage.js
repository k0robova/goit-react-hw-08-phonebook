import css from './HomePage.module.css';

export default function Home() {
  return (
    <div className={css.container_homepage}>
      <h1 className={css.title_homepage}>Hello and welcome!</h1>
      <h2 className={css.second_title_homepage}>
        I invite you to explore my contact website. Create an account today and
        begin organizing your contacts effortlessly.
      </h2>
    </div>
  );
}
