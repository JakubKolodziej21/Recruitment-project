import React from "react";
import useEditCategories from "./useEditCategories";
import { useNavigate } from "react-router-dom";
const EditCategories = (submitForm) => {
  const { data, handleChange, values, handleSubmit } =
    useEditCategories(submitForm);
  let navigate = useNavigate();

  return (
    <section className="container">
      <div className="space">
        <div className="symbol">&#10002;</div>
      </div>
      <h1>Edytuj nazwę kategorii</h1>
      <input
        onChange={handleChange}
        type="text"
        value={values.name}
        name="name"
        placeholder="Podaj nazwę nowej kategori"
      />
      <button onClick={() => navigate(-1)}>Cofnij</button>
      <button onClick={handleSubmit}>Zatwierdź</button>
    </section>
  );
};

export default EditCategories;
