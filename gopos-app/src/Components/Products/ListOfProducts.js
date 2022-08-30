import React, { useState, useEffect } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

import properties from "../../Config/Properties";
import { Container } from "react-bootstrap";

const ListOfProducts = () => {
  const [listofproducts, setListofproducts] = useState([]);
  let navigate = useNavigate();

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

  const [category, setCategory] = useState([]);

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
        setCategory(data.data);
      },
      error: (data) => {
        console.log("error", data);
      },
    });
  }, []);

  const getCategoryName = (id_category) => {
    // console.log("kategorie>>", category)
    return category.map((item) => {
      if (id_category === item.id) {
        return <p>{item.name}</p>;
      }
    });
  };

  const BTNRemove = ({ id }) => {
    $.ajax({
      url: "https://newdemostock.gopos.pl/ajax/219/product_categories" + { id },
      method: "DELETE",
      timeout: 0,
      headers: {
        Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: "JSESSIONID=8940F5B719FDE1881D3BA15997C79F5D",
      },
      success: (data) => {
        console.log("success", data);
      },
      error: (data) => {
        console.log("error", data);
      },
    });
  };
  const BTNEdit = () => {};

  return (
    <div className="container">
      <div className="space">
        <div className="symbol">&#9751;</div>
      </div>

      <h1>Lista produktów</h1>
      {console.log(listofproducts)}
      <table className="category_column">
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Kategoria</th>
            <th>Akcja</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listofproducts.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{getCategoryName(item.category_id)}</td>
              <td>
                <button onClick={(e) => navigate("../" + item.id)}>
                  Edytuj
                </button>
              </td>
              <td>
                {/* <button onClick={BTNRemove(item.id)}>Remove</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfProducts;
