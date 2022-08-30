import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import useEditListOfProduct from "./useEditListOfProduct";
import { useNavigate } from "react-router-dom";

const EditListOfProduct = (submitForm) => {
	let navigate = useNavigate();
	const { handleChange, values, handleSubmit, categoryList, handleCategory } =
		useEditListOfProduct(submitForm);

	return (
		<section className='container'>
			<div className='space'>
				<div className='symbol'>&#9881;</div>
			</div>
			<h1>Stwórz Produkt & Kategorię</h1>
			<button onClick={() => navigate(-1)}>Cofnij</button>
			<input
				onChange={handleChange}
				type='text'
				value={values.name}
				name='name'
				placeholder='Podaj nazwę nowego produktu'
			/>
			<CreatableSelect
				isClearable
				onChange={handleCategory}
				options={categoryList}
			/>

			<button onClick={handleSubmit}>Zatwierdź</button>
		</section>
	);
};

export default EditListOfProduct;
