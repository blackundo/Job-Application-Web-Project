import Layout from "../../Layouts/Layout";
import FormLogin from "../../Components/Login/Login";
import { useSelector } from "react-redux";

const Login = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Layout>
      <FormLogin Title={"Login"} titleBtn={"Login"} />
    </Layout>
  );
};

export default Login;
