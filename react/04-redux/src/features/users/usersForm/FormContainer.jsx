import { Formik, Form } from "formik";
import Input from "./Input";
import { MODE, ROLE, USERNAME, AGE } from "../constants";
import Buttons from "./Buttons";
import Select from "./Select";

function FormContainer({ initialValues, onSubmit, mode, roles }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Input
          required
          name={USERNAME}
          label={"Username"}
          disabled={mode === MODE.VIEW}
        />
        Role
        <br />
        <Select
          options={roles}
          disabled={mode === MODE.VIEW}
          label={"Role"}
          name={ROLE}
          loading={!roles}
        ></Select>
        <Input
          required
          name={AGE}
          label={"Age"}
          disabled={mode === MODE.VIEW}
          type="number"
          validate={(value) => {
            if (value < 16 || value > 110) {
              return "The age should be within the range of 16 and 110";
            }
          }}
        ></Input>
        <Buttons mode={mode} />
      </Form>
    </Formik>
  );
}

export default FormContainer;
