import logo from "./logo.svg";
import "./App.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// import useFormik hook from formik
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  // Step1:
  // initialize form input fields inside useFormik({})
  // Step 2: adding Onchange on every input field
  // Step 3: adding name attribute on every input field
  // Step 4: adding value attribute on every input field
  // Step 5: create on submit function

  const FormInput = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      check: false,
    },
    // form validatrion
    // validation step one:
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      username: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.number().required(),
    }),

    // you can create submit funtion here or
    // you can also create it outside.
    // this one

    // both works same
    // here i will create submit function inside useFormik({}) hook

    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },

    // onSubmit: Submit(values),
  });

  // on form submit button
  //  you can do either this or

  // const Submit = (values) => {
  //   console.log(values);
  // };

  return (
    <div className="p-5">
      <form
        onSubmit={FormInput.handleSubmit}
        className="row g-3 needs-validation"
      >
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="validationCustom01"
            value={FormInput.values.firstName}
            onChange={FormInput.handleChange}
          />
          {FormInput.touched.firstName && FormInput.errors.firstName && (
            <div className="invalid-feedback d-block">
              {FormInput.errors.firstName}
            </div>
          )}
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            onChange={FormInput.handleChange}
            value={FormInput.values.lastName}
            id="validationCustom02"
          />
          {FormInput.touched.lastName && FormInput.errors.lastName && (
            <div className="invalid-feedback d-block">
              {FormInput.errors.lastName}
            </div>
          )}
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              name="username"
              onChange={FormInput.handleChange}
              value={FormInput.values.username}
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
            />
            {FormInput.touched.username && FormInput.errors.username && (
              <div className="invalid-feedback d-block">
                {FormInput.errors.username}
              </div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            Email
          </label>
          <input
            type="email"
            onChange={FormInput.handleChange}
            value={FormInput.values.email}
            name="email"
            className="form-control"
            id="validationCustom03"
          />
          {FormInput.touched.email && FormInput.errors.email && (
            <div className="invalid-feedback d-block">
              {FormInput.errors.email}
            </div>
          )}
        </div>

        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            Phone Number
          </label>
          <input
            onChange={FormInput.handleChange}
            value={FormInput.values.phone}
            type="tel"
            name="phone"
            className="form-control"
            id="validationCustom05"
          />
          {FormInput.touched.phone && FormInput.errors.phone && (
            <div className="invalid-feedback d-block">
              {FormInput.errors.phone}
            </div>
          )}
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              onChange={FormInput.handleChange}
              className="form-check-input"
              type="checkbox"
              name="check"
              value={FormInput.values.check}
              id="invalidCheck"
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            {/* <div className="invalid-feedback">
              You must agree before submitting.
            </div> */}
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
