import React from "react";
import Main from "../../components/main";
import Container from "../../components/sharedComponent/container";
import { userDatas } from "../../components/data";

const Dashboard = () => {
  
  return (
    <Container>
        <Main walletBalance={userDatas[0].accountBalance}/>
    </Container>
   
  );
};

export default Dashboard;
