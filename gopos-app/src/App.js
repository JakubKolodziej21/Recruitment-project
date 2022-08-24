import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import ListOfProducts from "./Components/ListOfProducts";
import EditProducts from "./Components/EditProducts";
import ListOfCategories from "./Components/ListOfCategories";
import EditCategories from "./Components/EditCategories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ListOfProducts />} />
        <Route path="Page1" element={<ListOfProducts />} />
        <Route path="Page2" element={<EditProducts />} />
        <Route path="Page3" element={<ListOfCategories />} />
        <Route path="Page4" element={<EditCategories />} />
      </Route>
    </Routes>
  );
}

export default App;
