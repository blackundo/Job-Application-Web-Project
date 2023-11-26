import Layout from "../../Layouts/Layout";
import FormLogin from "../../Components/Login/Login";
import { useSelector } from "react-redux";

const Login = () => {
  return (
    <Layout>
      <FormLogin Title={"Login"} titleBtn={"Login"} />
    </Layout>
  );
};

export default Login;
