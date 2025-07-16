'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import FormGroup from '@/components/FormGroup.component';
import TextField from '@/components/TextField.component';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
	});

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		alert(JSON.stringify(formData));
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,

			[event.target.name]: event.target.value,
		});
	};

	return (
		<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
			<FormGroup>
				<TextField label='First Name' name='firstName' onChange={handleInputChange} value={formData.firstName} />
				<TextField label='Last Name' name='lastName' onChange={handleInputChange} value={formData.lastName} />
			</FormGroup>

			<FormGroup>
				<TextField label='Email Address' name='email' onChange={handleInputChange} value={formData.email} />
			</FormGroup>

			<button
				className='mt-[16px] flex h-[48px] cursor-pointer flex-row items-center justify-center rounded-[8px] bg-green-600 font-bold tracking-[-0.4px] text-white focus:outline-none'
				type='submit'
			>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
