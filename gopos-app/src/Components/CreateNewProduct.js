import React, { useState } from "react";

const CreateNewProduct = () => {
  const NewProduct = () => {
    alert("Hej");
  };

  const [values, setValues] = useState({
    nameofproduct: "Ford Focus",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="space">
      <div className="symbol">&#9881;</div></div>
      <h1>Stwórz Produkt & Kategorię</h1>
      <input
        onChange={handleChange}
        type="text"
        value={values.nameofproduct}
        name="nameofproduct"
        placeholder="Podaj nazwę nowego produktu"
      />
      <input type="select"></input>
      <button onClick={NewProduct}>Utwórz</button>


      <h2>Wprowadź kategorię</h2>
      <input
        onChange={handleChange}
        type="text"
        value={values.nameofproduct}
        name="nameofcategory"
        placeholder="Podaj nazwę nowej kategorii"
      />
      <button onClick={NewProduct}>Utwórz</button>
    </div>
  );
};

export default CreateNewProduct;
