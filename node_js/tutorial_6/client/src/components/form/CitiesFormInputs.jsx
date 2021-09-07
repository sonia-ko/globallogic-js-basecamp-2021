import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import {
  NAME,
  DESCRIPTION,
  COUNTRY,
  PLACES,
  SETTLED,
  PICTURE,
} from "../../helpers";

function CitiesFormInputs({ initialValues, onSubmit, mode }) {
  const history = useHistory();
  const cityValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(
        2,
        " The name of the city is too short, it should be at least 2 characters long"
      )
      .max(100, "The name of the city should be up to 100 characters")
      .required("This field is required, please enter it"),
    places: Yup.string()
      .min(2, "Please add at least 3 characters here")
      .max(20000, "Too Long!"),
    settled: Yup.number().max(2021, "The maximum year is 2021"),
    country: Yup.string().required("This field is required, please enter it"),
    description: Yup.string()
      .min(3, " The description should be at least 3 characters long")
      .max(20000, "The description should be up to 20000 characters")
      .required("This field is required, please enter it"),
  });

  return (
    <Formik
      validationSchema={cityValidationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="city-form">
          <h2>Simple questions about the city...</h2>
          <div className="cities-form-questions">
            <div>Please enter a name of the city</div>
            <Field name={NAME} label={"name"} />
            {errors.city && touched.city ? (
              <div className="error-msg-city-form">{errors.book}</div>
            ) : null}

            <br />

            <div>Please enter the country:</div>
            <Field name={COUNTRY} label={"country"} />
            {errors.country && touched.country ? (
              <div className="error-msg-city-form">{errors.country}</div>
            ) : null}

            <br />
            <div>The year that the city was settled:</div>
            <Field name={SETTLED} type="number" />
            {errors.settled && touched.settled ? (
              <div className="error-msg-city-form">{errors.settled}</div>
            ) : null}
            <br />
            <div>
              <div>
                Please enter your favourite places in the city / the places that
                you want to visit:
              </div>
              <Field name={PLACES}></Field>
            </div>

            <br />
            <div>Please enter the link to the picture with the city:</div>
            <Field name={PICTURE} label={"picture"} />
            {errors.picture && touched.picture ? (
              <div className="error-msg-city-form">{errors.picture}</div>
            ) : null}
            <br />

            <div>Please add a short description of a city:</div>
            <Field as="textarea" name={DESCRIPTION} />
            {errors.description && touched.description ? (
              <div className="error-msg-city-form">{errors.description}</div>
            ) : null}

            <div className="form-btns">
              <button type="submit">Save</button>
              <button type="button" onClick={() => history.push("/cities")}>
                Cancel
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CitiesFormInputs;
