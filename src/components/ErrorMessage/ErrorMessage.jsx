import css from './ErrorMessage.module.css';
export default function ErrorMessage() {
  return <p className={css.errorMessage}>Unexpected error, please refresh the page and try again!</p>;
}
