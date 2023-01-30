import { Formik } from "formik";
import SignupSchema from "./validation";


function SingUp() {

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          cpassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          value,
          errors,
          handleBlur,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <label>Email </label>
            <input
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>

            {errors.email && touched.email && <p>{errors.email}</p>}

            <label>Password </label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>

            {errors.password && touched.password && <p>{errors.password}</p>}

            <label>Confirm Password </label>
            <input
              name="cpassword"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>

            {errors.cpassword && touched.cpassword && <p>{errors.cpassword}</p>}

            <button type="submit">Submit</button>

            <br></br>
            <br></br>
            {/* {JSON.stringify(values)} */}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SingUp;
