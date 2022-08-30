import React, { useState, useEffect } from "react";
import $ from "jquery";

import properties from "../Config/Properties";

const ListOfCategories = () => {
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
  return (
    <div className="container">
      <div className="space">
      <div className="symbol">&#9733;</div></div>
      <h1>Lista kategorii</h1>
      {console.log(listofcategories)}
      <table>
        <thead>
         
        </thead>
        <tbody>
          {listofcategories.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
            </tr>
          ))}

          {/* <tr>
            <td>Balon</td>
            <td>Zabawa</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfCategories;
