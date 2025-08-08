'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '@/components/Button';
import FormGroup from '@/components/FormGroup';
import TextField from '@/components/TextField';

import { ContactFormSchema } from '@/model/schemas/ContactFormSchema';
import { ContactFormData } from '@/model/types/ContactFormData';

const initialContactFormData: ContactFormData = {
	email: '',
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

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		try {
			ContactFormSchema.parse(contactFormData);

			console.log(contactFormData);
		} catch (error) {
			console.error(error);
		} finally {
			setContactFormData(initialContactFormData);
		}
	};

	return (
		<form className='flex flex-col gap-300' onSubmit={handleSubmit}>
			<FormGroup>
				<TextField id='first-name' label='First Name' name='firstName' onChange={handleTextFieldChange} type='text' value={contactFormData.firstName} required />
				<TextField id='last-name' label='Last Name' name='lastName' onChange={handleTextFieldChange} type='text' value={contactFormData.lastName} required />
			</FormGroup>

			<FormGroup>
				<TextField id='email' label='Email Address' name='email' onChange={handleTextFieldChange} type='email' value={contactFormData.email} required />
			</FormGroup>

			<Button type='submit'>Submit</Button>
		</form>
	);
}
