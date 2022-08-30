import React, { useState } from "react";
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
		<div className='container'>
			<div className='space'>
				<div className='symbol'>&#9881;</div>
			</div>
			<h1>Stwórz Produkt & Kategorię</h1>
			<input
				onChange={handleChangeP}
				type='text'
				value={valuesP.nameP}
				name='nameP'
				placeholder='Podaj nazwę nowego produktu'
			/>
			<CreatableSelect
				isClearable
				onChange={handleCategory}
				options={categoryList}
			/>
			<button onClick={handleSubmitP}>Utwórz</button>

			<h2>Wprowadź kategorię</h2>
			<input
				onChange={handleChangeK}
				type='text'
				value={valuesK.nameK}
				name='nameK'
				placeholder='Podaj nazwę nowej kategorii'
			/>
			<button onClick={handleSubmitK}>Utwórz</button>
		</div>
	);
};

export default CreateNewProduct;
