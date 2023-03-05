import css from 'components/Statistics/Statistics.module.css';
export function titlePresence(title) {
  if (title) {
    return <h2 className={css.title}>{title}</h2>;
  }
}
