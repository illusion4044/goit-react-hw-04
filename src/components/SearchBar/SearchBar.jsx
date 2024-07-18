import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ topic: '' }}
      onSubmit={(values, actions) => {
        if (!values.topic.trim()) {
          toast.error('Please enter a search term');
        } else {
          onSearch(values.topic);
          actions.resetForm();
        }
      }}
    >
      <Form className={css.searchBar}>
        <Field
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images "
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
