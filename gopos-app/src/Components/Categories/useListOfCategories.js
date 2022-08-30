import { useState, useEffect } from "react";
import $ from "jquery";

import properties from "../../Config/Properties";

const useListOfCategories = () => {
	const [listofcategories, setListOfCategories] = useState([]);
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
				setListOfCategories(data.data);
			},
			error: (data) => {
				console.log("error", data);
			},
		});
	}, []);

	return { listofcategories };
};

export default useListOfCategories;
