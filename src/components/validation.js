import * as Yup from "yup"

const validation = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(5),
  cpassword: Yup.string().required().oneOf([Yup.ref("password")]),
});

export default validation