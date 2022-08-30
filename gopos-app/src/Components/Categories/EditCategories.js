import React from "react";
import useEditCategories from "./useEditCategories";
const EditCategories = (submitForm) => {
	const { data, handleChange, values, handleSubmit } =
		useEditCategories(submitForm);
	return (
		<section className='container'>
			<div className='space'>
				<div className='symbol'>&#10002;</div>
			</div>
			<input
				onChange={handleChange}
				type='text'
				value={values.name}
				name='name'
				placeholder='Podaj nazwę nowej kategori'
			/>
			<button onClick={handleSubmit}>Zatwierdź</button>

		</section>
	);
};

export default EditCategories;
