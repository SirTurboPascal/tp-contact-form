'use client';

import { ChangeEvent, useState } from 'react';

import TextField from '@/components/TextField';

import { ContactFormData } from '@/model/types/ContactFormData';

const initialContactFormData: ContactFormData = {
	firstName: '',
	lastName: '',
};

export default function () {
	const [contactFormData, setContactFormData] = useState<ContactFormData>(initialContactFormData);

	const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setContactFormData({
			...contactFormData,

			[name]: value,
		});
	};

	const handleSubmit = () => {
		console.log(contactFormData);
	};

	return (
		<form className='flex flex-col gap-300' onSubmit={handleSubmit}>
			<TextField id='first-name' label='First Name' name='firstName' onChange={handleTextFieldChange} value={contactFormData.firstName} required />
			<TextField id='last-name' label='Last Name' name='lastName' onChange={handleTextFieldChange} value={contactFormData.lastName} />
		</form>
	);
}
