import { withFormik } from "formik";
import LoginForm from "./login";
const LoginFormHandle = withFormik({
  mapPropsToValues: (props: any) => {
    return {
      email: "",
      password: "",
    };
  },
  handleSubmit: async (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(true);
  },
})(LoginForm);
export default LoginFormHandle;
