'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '@/components/Button.component';
import FormGroup from '@/components/FormGroup.component';
import TextArea from '@/components/TextArea.component';
import TextField from '@/components/TextField.component';
import IFormData from '@/model/interfaces/IFormData.interface';

const ContactForm = () => {
	const [formData, setFormData] = useState<IFormData>({
		email: '',
		firstName: '',
		lastName: '',
		message: '',
	});

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		alert(JSON.stringify(formData));
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

			<FormGroup>
				<TextArea label='Message' name='message' onChange={handleInputChange} value={formData.message} />
			</FormGroup>

			<Button type='submit'>Submit</Button>
		</form>
	);
};

export default ContactForm;
