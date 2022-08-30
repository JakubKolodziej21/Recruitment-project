import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import EditProducts from "./Components/EditProducts";
import ListOfCategories from "./Components/Categories/ListOfCategories";
import EditCategories from "./Components/Categories/EditCategories";
import CreateNewProduct from "./Components/CreateNewProduct";

import Produts from "./Components/Produts";
import ListOfProducts from "./Components/Products/ListOfProducts";
import EditListOfProduct from "./Components/Products/EditListOfProduct";

import Categories from "./Components/Categories";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Produts />}>
					<Route index element={<ListOfProducts />} />
					<Route path='ListOfProducts' element={<ListOfProducts />} />
					<Route path=':id' element={<EditListOfProduct />} />
				</Route>
				<Route path='Cateories' element={<Categories />}>
					<Route index element={<ListOfCategories />} />
					<Route path='ListOfCategories' element={<ListOfCategories />} />
					<Route path=':id' element={<EditCategories />} />
				</Route>
				{/* <Route path='Page1' element={<ListOfProducts />} /> */}
				<Route path='Page3' element={<EditProducts />} />
				<Route path='Page4' element={<EditCategories />} />
				<Route path='Page5' element={<CreateNewProduct />} />
			</Route>
		</Routes>
	);
}

export default App;
