import { Field, Form, Formik } from "formik";
import PropTypes from 'prop-types';

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ topic: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.topic);
        actions.resetForm();
      }}
    >
      <Form>
        <Field
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
