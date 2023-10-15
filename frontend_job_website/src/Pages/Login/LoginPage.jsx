import React, { useEffect, useState } from "react";

import Layout from "../../Layouts/Layout";
import FormContent from "../../Components/Login/Login";

const Login = () => {
  return (
    <Layout>
      <FormContent Title={"Login"} titleBtn={"Login"} />
    </Layout>
  );
};

export default Login;
