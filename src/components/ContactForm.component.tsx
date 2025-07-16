'use client';

import { eq } from 'lodash';
import { ChangeEvent, FormEvent, useState } from 'react';
import { z } from 'zod';

import Button from '@/components/Button.component';
import FormGroup from '@/components/FormGroup.component';
import RadioButton from '@/components/RadioButton.component';
import RadioButtonGroup from '@/components/RadioButtonGroup.component';
import TextArea from '@/components/TextArea.component';
import TextField from '@/components/TextField.component';
import QueryType from '@/model/types/QueryType.type';

const FormData = z.object({
	email: z.email(),
	firstName: z.string().trim().min(1),
	lastName: z.string().trim().min(1),
	message: z.string().trim().min(1),

	queryType: z.literal(['general-enquiry', 'support-request'] as QueryType[]),
});

type FormData = z.infer<typeof FormData>;

const initialState: FormData = {
	email: '',
	firstName: '',
	lastName: '',
	message: '',
	queryType: 'general-enquiry',
};

const ContactForm = () => {
	const [formData, setFormData] = useState<FormData>(initialState);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		try {
			FormData.parse(formData);

			alert(JSON.stringify(formData));
			setFormData(initialState);
		} catch (error) {
			if (error instanceof z.ZodError) {
				console.log(error.issues);
			}
		}
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

			<RadioButtonGroup label='Query Type'>
				<RadioButton checked={eq(formData.queryType, 'general-enquiry')} label='General Enquiry' name='queryType' onChange={handleInputChange} value='general-enquiry' />
				<RadioButton checked={eq(formData.queryType, 'support-request')} label='Support Request' name='queryType' onChange={handleInputChange} value='support-request' />
			</RadioButtonGroup>

			<FormGroup>
				<TextArea label='Message' name='message' onChange={handleInputChange} value={formData.message} />
			</FormGroup>

			<Button type='submit'>Submit</Button>
		</form>
	);
};

export default ContactForm;
