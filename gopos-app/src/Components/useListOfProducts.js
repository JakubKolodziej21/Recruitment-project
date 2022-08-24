import React from "react";
import $ from "jquery";
import properties from "../Config/Properties";

const useListOfProducts = () => {
  $.ajax({
    url:
      "https://" +
      properties.host +
      "/api/" +
      properties.organizationId +
      "/products",
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
