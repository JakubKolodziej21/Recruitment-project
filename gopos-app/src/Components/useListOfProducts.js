import React from "react";
import $ from "jquery";
import properties from "../Config/Properties";

const useListOfProducts = () => {
  $.ajax({
    url: "https://newdemostock.gopos.pl/api/{organizationId}/products?page=0&size=0&sort[empty]=true&sort[sorted]=true&sort[unsorted]=true&search=string&name=string&description=string&sku=string&custom_id=string&barcode=string&statuses=ENABLED&categories=0&ids=0&products_in_recipe=0&sale_price=0&product_type=BASIC&measure_type=sztuka&include=string",
    // "https://" +
    // properties.host +
    // "/api/" +
    // properties.organizationId +
    // "/products"
    method: "GET",

    timeout: 0,

    headers: {
      Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
    },

    success: (data) => {
      console.log("success", data);
    },

    error: (data) => {
      console.log("error", data);
    },
  });
};

export default useListOfProducts;
