import "./App.css";
import React from "react";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import Searchbar from "./components/Searchbar";
import Coalescence from "./components/itemPages/Coalescence";
import MaterialsListProvider from "./components/context/MaterialsListProvider";

function App() {
  return (
    <div>
      <Layout>
        <MaterialsListProvider>
          <Coalescence />
        </MaterialsListProvider>
      </Layout>
    </div>
  );
}

export default App;
