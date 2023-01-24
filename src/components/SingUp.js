import { Formik } from "formik";
import SignupSchema from "./validation";
import "../App.css"


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
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label>Email </label>
            <input name="email" onChange={handleChange}></input>

            <label>Password </label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
            ></input>

            <label>Confirm Password </label>
            <input
              name="cpassword"
              type="password"
              onChange={handleChange}
            ></input>

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
