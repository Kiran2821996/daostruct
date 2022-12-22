import React from "react";
import { Layout } from "antd";

import HeaderNasa from "./components/HeaderNasa";
import MainNasa from "./components/MainNasa";

import "./App.css";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <div >
      <Header >
        <HeaderNasa />
      </Header>
      <div className="add"> <h3>Astronomy picture of the day</h3></div>
      </div>
      
      <Content>
        <MainNasa />
      </Content>
    </Layout>
  );
}

export default App;
