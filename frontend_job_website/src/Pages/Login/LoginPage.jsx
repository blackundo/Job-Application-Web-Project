import Layout from "../../Layouts/Layout";
import FormContent from "../../Components/Login/Login";
import { useSelector } from "react-redux";

const Login = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Layout>
      <FormContent Title={"Login"} titleBtn={"Login"} />
    </Layout>
  );
};

export default Login;
