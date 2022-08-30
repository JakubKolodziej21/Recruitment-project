import { useState, useEffect } from "react";
import $ from "jquery";
import { useNavigate, useLocation } from "react-router-dom";

const useEditCategories = () => {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const location = useLocation();
	const pathname = location.pathname.slice(11);
	console.log(pathname);

	const [values, setValues] = useState({
		id: "",
		uid: "",
		name: "",
		updated_at: "",
		status: "",
	});

	useEffect(() => {
		setValues({
			id: data.id,
			uid: data.uid,
			name: data.name,
			updated_at: "",
			status: data.status,
		});
	}, [data]);

	useEffect(() => {
		$.ajax({
			url:
				"https://newdemostock.gopos.pl/ajax/219/product_categories/" +
				pathname +
				"",
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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const body = JSON.stringify({
			id: values.id,
			uid: values.uid,
			name: values.name,
			updated_at: new Date().toJSON().slice(0, 19),
			status: values.status,
		});
		console.log(body);

		$.ajax({
			url:
				"https://newdemostock.gopos.pl/ajax/219/product_categories/" +
				pathname +
				"",
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
	};
};

export default useEditCategories;
