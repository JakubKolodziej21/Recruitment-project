import React, { useState, useEffect } from "react";
import useListOfCategories from "./useListOfCategories";
import { useNavigate } from "react-router-dom";

const ListOfCategories = (submitForm) => {
  const { listofcategories } = useListOfCategories(submitForm);
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="space">
        <div className="symbol">&#9733;</div>
      </div>
      <h1>Lista kategorii</h1>
      {console.log(listofcategories)}
      <table className="thin_table">
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Akcja</th>
          </tr>
        </thead>
        <tbody>
          {listofcategories.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>
                <button onClick={(e) => navigate("../" + item.id)}>
                  Edytuj
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfCategories;
