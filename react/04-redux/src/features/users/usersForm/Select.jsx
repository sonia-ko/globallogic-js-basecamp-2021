import { Field } from "formik";
import { useSelector } from "react-redux";
import LocalLoadingSpinner from "../../../components/loading/LocalLoadingSpinner";

function Select({ name, label, options, disabled = false }) {
  const rolesFetched = useSelector((state) => state.users.rolesFetched);
  const optionInputs = options.map((option) => {
    return (
      <option key={name + "_" + option} value={option}>
        {option}
      </option>
    );
  });

  return (
    <div>
      <div className={rolesFetched ? "regular" : "hidden"}>
        <Field as="select" disabled={disabled} label={label} name={name}>
          {optionInputs}
        </Field>
      </div>
      <div className={rolesFetched ? "hidden" : "regular"}>
        <LocalLoadingSpinner></LocalLoadingSpinner>
      </div>
    </div>
  );
}

export default Select;
