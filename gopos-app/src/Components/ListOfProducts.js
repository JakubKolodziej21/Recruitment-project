import React, { useState, useEffect } from "react";
import $ from "jquery";

import properties from "../Config/Properties";
import { Container } from "react-bootstrap";

const ListOfProducts = () => {
  const [listofproducts, setListofproducts] = useState([]);
  useEffect(() => {
    $.ajax({
      url: "https://newdemostock.gopos.pl/ajax/219/products",
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
        setListofproducts(data.data);
      },
      error: (data) => {
        console.log("error", data);
      },
    });
  }, []);

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

  // id   i    category_id
  const getCategoryName = () => {
    if (listofcategories) {
    }
  };

  return (
    <div className="container">
      <div className="space">
        
        <div className="symbol">&#9751;</div>
      </div>

      <h1>Lista produktów</h1>
      {console.log(listofproducts)}
      <table>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Kategoria</th>
          </tr>
        </thead>
        <tbody>
          {listofproducts.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.category_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfProducts;
