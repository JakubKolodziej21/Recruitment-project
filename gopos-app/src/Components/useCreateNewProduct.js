import { useState, useEffect } from "react";
import $ from "jquery";

const useCreateNewProduct = () => {
  const [categoryData, setCategoryData] = useState([]);

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
        setCategoryData(data.data);
      },
      error: (data) => {
        console.log("error", data);
      },
    });
  }, []);
  /////////////////////////////////////////////
  const [valuesP, setValuesP] = useState({
    uid: "",
    nameP: "",
    recipe_amount: "",
    type: "",
    status: "",
    measure_type: "",
    category_id: "",
    tax_id: "",
    updated_at: "",
    cost_price_money: {
      amount: "",
      currency: "",
    },
    cost_price_gross_money: {
      amount: "",
      currency: "",
    },
    state: {
      in_stock_amount: "",
      commited_amount: "",
      incoming_amount: "",
      available_amount: "",
    },
  });
  const handleChangeP = (e) => {
    const { name, value } = e.target;
    setValuesP({
      ...valuesP,
      [name]: value,
    });
  };
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    if (Array.isArray(categoryData) && categoryData) {
      let temp = [];
      categoryData.map((el) => temp.push({ label: el.name, value: el.id }));
      // console.log("categoryData",temp)
      setCategoryList(temp);
    }
  }, [categoryData]);

  const [category, setCategory] = useState({ value: "" });
  const handleCategory = (val) => setCategory({ value: val.value });

  const handleSubmitP = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      name: valuesP.nameP,
      recipe_amount: 1.0,
      type: "BASIC",
      status: "ENABLED",
      measure_type: "KILOGRAM",
      category_id: category.value,
      tax_id: 1,
      updated_at: new Date().toJSON().slice(0, 19),
      cost_price_money: {
        amount: 0.0,
        currency: "PLN",
      },
      cost_price_gross_money: {
        amount: 0.0,
        currency: "PLN",
      },
      state: {
        in_stock_amount: 0.0,
        commited_amount: 0.0,
        incoming_amount: 0.0,
        available_amount: 0.0,
      },
    });
    console.log(body);

    $.ajax({
      url: "https://newdemostock.gopos.pl/ajax/219/products",
      method: "POST",
      timeout: 0,
      data: body,
      headers: {
        Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: "JSESSIONID=8940F5B719FDE1881D3BA15997C79F5D",
        "Content-Type": "application/json",
      },

      success: (data) => {
        console.log("success", data);
        window.location.reload();
      },
      error: (data) => {
        console.log("error", data);
      },
    });
  };
  //////////////////////////////////////
  /////////////////////////////////////

  const [valuesK, setValuesK] = useState({
    id: "",
    uid: "",
    nameK: "",
    updated_at: "",
    status: "",
  });

  const handleChangeK = (e) => {
    const { name, value } = e.target;
    setValuesK({
      ...valuesK,
      [name]: value,
    });
  };

  const handleSubmitK = (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      name: valuesK.nameK,
      updated_at: new Date().toJSON().slice(0, 19),
      status: "ENABLED",
    });
    console.log(body);

    $.ajax({
      url: "https://newdemostock.gopos.pl/ajax/219/product_categories",
      method: "POST",
      timeout: 0,
      data: body,
      headers: {
        Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
        Connection: "keep-alive",
        Cookie: "JSESSIONID=8940F5B719FDE1881D3BA15997C79F5D",
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      success: (data) => {
        console.log("success", data);
        window.location.reload();
      },
      error: (data) => {
        console.log("error", data);
      },
    });
  };

  return {
    valuesP,
    handleChangeP,
    handleSubmitP,
    categoryList,
    handleCategory,
    valuesK,
    handleChangeK,
    handleSubmitK,
  };
};

export default useCreateNewProduct;
