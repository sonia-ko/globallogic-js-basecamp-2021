import { Field, Formik, Form } from 'formik';
import Input from '../../../../common/Formik/Input';
import { MODE } from '../../../../constants';
import { ROLE, USERNAME, AGE } from '../../constants';
import Buttons from './Buttons';

function FormContainer({ initialValues, onSubmit, mode, roles }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Input required name={USERNAME} label={'Username'} disabled={mode === MODE.VIEW} />
        Role
        <br />
        <Field as="select" required disabled={mode === MODE.VIEW} label="Role" name={ROLE}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="super-user">Super-user</option>
        </Field>
        <br />
        <Input
          required
          name={AGE}
          label={'Age'}
          disabled={mode === MODE.VIEW}
          type="number"
          validate={value => {
            if (value < 16 || value > 110) {
              return 'The age should be within the range of 16 and 110';
            }
          }}
        ></Input>
        <Buttons mode={mode} />
      </Form>
    </Formik>
  );
}

export default FormContainer;
