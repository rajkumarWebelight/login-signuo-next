import { withFormik } from "formik";
import SignUpForm from "./signup";
const SignUpFormHandle = withFormik({
  mapPropsToValues: (props: any) => {
    return {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
    };
  },
  handleSubmit: async (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(true);
  },
})(SignUpForm);
export default SignUpFormHandle;
