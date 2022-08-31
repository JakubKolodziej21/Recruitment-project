import React from "react";
import useCreateNewProduct from "./useCreateNewProduct";
import CreatableSelect from "react-select/creatable";

const CreateNewProduct = (submitForm) => {
  const {
    valuesP,
    handleChangeP,
    handleSubmitP,
    categoryList,
    handleCategory,
    valuesK,
    handleChangeK,
    handleSubmitK,
  } = useCreateNewProduct(submitForm);

  return (
    <div className="container">
      <div className="space">
        <div className="symbol">&#9881;</div>
      </div>
      <h1>Stwórz Produkt & Kategorię</h1>
      <h2>Stwórz nowy produkt & wybierz kategorię</h2>
      <input
        onChange={handleChangeP}
        type="text"
        value={valuesP.nameP}
        name="nameP"
        placeholder="Podaj nazwę nowego produktu"
      />
      <CreatableSelect
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,

          colors: {
            ...theme.colors,
            primary25: "#1a86e0",
            primary: "#434e5e",
            color: "black",
          },
        })}
        isClearable
        onChange={handleCategory}
        options={categoryList}
      />
      <button onClick={handleSubmitP}>Utwórz</button>

      <h2>Utwórz kategorię</h2>
      <input
        onChange={handleChangeK}
        type="text"
        value={valuesK.nameK}
        name="nameK"
        placeholder="Podaj nazwę nowej kategorii"
      />
      <button onClick={handleSubmitK}>Utwórz</button>
    </div>
  );
};

export default CreateNewProduct;
