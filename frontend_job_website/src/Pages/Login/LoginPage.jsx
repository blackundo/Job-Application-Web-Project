import Layout from "../../Layouts/Layout";
<<<<<<< HEAD
import FormLogin from "../../Components/Login/Login";
import { useSelector } from "react-redux";

const Login = () => {
  return (
    <Layout>
      <FormLogin Title={"Login"} titleBtn={"Login"} />
=======
import FormContent from "../../Components/Login/Login";
import { useSelector } from "react-redux";

const Login = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Layout>
      <FormContent Title={"Login"} titleBtn={"Login"} />
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
    </Layout>
  );
};

export default Login;
