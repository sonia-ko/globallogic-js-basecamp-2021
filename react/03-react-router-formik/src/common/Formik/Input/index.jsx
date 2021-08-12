import { useField, ErrorMessage } from 'formik';

import './styles.scss';

function Input({ name, label, validate, type = 'text', disabled = false, required = false }) {
  const requiredValidation = value => {
    if (required && value === '') {
      return 'This field is required, please add the necessary information';
    }

    return validate ? validate(value) : false;
  };
  const [field] = useField({ name, validate: requiredValidation });

  return (
    <div className="Input">
      <label>
        <div>{required ? '*' + label : label}</div>
        <input type={type} disabled={disabled} {...field} />
      </label>

      <ErrorMessage name={name} className="error" component="div" />
    </div>
  );
}

export default Input;
