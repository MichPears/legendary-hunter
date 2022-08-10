import "./App.css";
import React from "react";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import Searchbar from "./components/Searchbar";
import Coalescence from "./components/itemPages/Coalescence";

function App() {
  return (
    <div>
      <Layout>
        <Coalescence />
      </Layout>
    </div>
  );
}

export default App;
