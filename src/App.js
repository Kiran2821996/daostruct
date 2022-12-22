import React from "react";
import { Layout } from "antd";

import HeaderNasa from "./components/HeaderNasa";
import MainNasa from "./components/MainNasa";

import "./App.css";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <HeaderNasa />
      </Header>
      <Content>
        <MainNasa />
      </Content>
    </Layout>
  );
}

export default App;
