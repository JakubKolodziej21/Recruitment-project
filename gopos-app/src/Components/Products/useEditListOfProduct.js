import { useState, useEffect } from "react";
import $ from "jquery";
import { useNavigate, useLocation } from "react-router-dom";

const useEditListOfProduct = () => {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [categoryData, setCategoryData] = useState([]);
	const location = useLocation();
	const pathname = location.pathname.slice(9);
	// console.log(typeof pathname)

	const [values, setValues] = useState({
		id: "",
		uid: "",
		name: "",
		recipe_amount: "",
		type: "",
		status: "",
		measure_type: "",
		category_id: "",
		tax_id: "",
		updated_at: "",
		cost_price_money: {
			amount: "",
			currency: "",
		},
		cost_price_gross_money: {
			amount: "",
			currency: "",
		},
		state: {
			in_stock_amount: "",
			commited_amount: "",
			incoming_amount: "",
			available_amount: "",
		},
	});

	useEffect(() => {
		setValues({
			id: data.id,
			uid: data.uid,
			name: data.name,
			recipe_amount: data.recipe_amount,
			type: data.type,
			status: data.status,
			measure_type: data.measure_type,
			category_id: data.category_id,
			tax_id: data.tax_id,
			updated_at: data.updated_at,
			cost_price_money: data.cost_price_money,
			cost_price_gross_money: data.cost_price_gross_money,
			state: data.state,
		});
	}, [data]);

	useEffect(() => {
		$.ajax({
			url: "https://newdemostock.gopos.pl/ajax/219/products/" + pathname + "",
			method: "GET",
			timeout: 0,
			headers: {
				Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
				Accept: "*/*",
				Connection: "keep-alive",
				Cookie: "JSESSIONID=8940F5B719FDE1881D3BA15997C79F5D",
			},
			success: (data) => {
				console.log("success", data);
				setData(data.data);
			},
			error: (data) => {
				console.log("error", data);
			},
		});
	}, []);
	///////////////////////////////////////////////////
	useEffect(() => {
		$.ajax({
			url: "https://newdemostock.gopos.pl/ajax/219/product_categories",
			method: "GET",
			timeout: 0,
			headers: {
				Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
				Accept: "*/*",
				Connection: "keep-alive",
				Cookie: "JSESSIONID=8940F5B719FDE1881D3BA15997C79F5D",
			},
			success: (data) => {
				console.log("success", data);
				setCategoryData(data.data);
			},
			error: (data) => {
				console.log("error", data);
			},
		});
	}, []);

	const getCategoryName = (id_category) => {
		return categoryData.map((item) => {
			if (id_category === item.id) {
				// return <p>{item.name}</p>;
			}
		});
	};

	const [categoryList, setCategoryList] = useState([]);
	useEffect(() => {
		if (Array.isArray(categoryData) && categoryData) {
			let temp = [];
			categoryData.map((el) => temp.push({ label: el.name, value: el.id }));
			// console.log("categoryData",temp)
			setCategoryList(temp);
		}
	}, [categoryData]);

	const [category, setCategory] = useState({ value: "" });
	const handleCategory = (val) => setCategory({ value: val.value });
	///////////////////////////////////////////////////

	const date = new Date().toJSON().slice(0, 19);
	// console.log(date);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	useEffect(() => {
		setValues((previousValues) => ({
			...previousValues,
		}));
	}, [categoryData, categoryList]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const body = JSON.stringify({
			id: values.id,
			uid: values.uid,
			name: values.name,
			recipe_amount: values.recipe_amount,
			type: values.type,
			status: values.status,
			measure_type: values.measure_type,
			category_id: category.value,
			tax_id: values.tax_id,
			updated_at: new Date().toJSON().slice(0, 19),
			cost_price_money: values.cost_price_money,
			cost_price_gross_money: values.cost_price_gross_money,
			state: values.state,
		});
		console.log(body);

		$.ajax({
			url: "https://newdemostock.gopos.pl/ajax/219/products/" + pathname + "",
			method: "PUT",
			timeout: 0,
			data: body,
			headers: {
				Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
				Accept: "*/*",
				Connection: "keep-alive",
				Cookie: "JSESSIONID=8940F5B719FDE1881D3BA15997C79F5D",
				Accept: "application/json",
				"Content-Type": "application/json",
			},

			success: (data) => {
				console.log("success", data);
				navigate(-1);
			},
			error: (data) => {
				console.log("error", data);
			},
		});
	};

	return {
		data,
		handleChange,
		values,
		handleSubmit,
		categoryList,
		handleCategory,
	};
};

export default useEditListOfProduct;
