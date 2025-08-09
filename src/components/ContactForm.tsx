'use client';

import { eq } from 'lodash';
import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '@/components/Button';
import FormGroup from '@/components/FormGroup';
import RadioButton from '@/components/RadioButton';
import TextArea from '@/components/TextArea';
import TextField from '@/components/TextField';

import { ContactFormSchema } from '@/model/schemas/ContactFormSchema';
import { ContactFormData } from '@/model/types/ContactFormData';

const initialContactFormData: ContactFormData = {
	email: '',
	firstName: '',
	lastName: '',
	message: '',
	queryType: 'general-enquiry',
};

export default function () {
	const [contactFormData, setContactFormData] = useState<ContactFormData>(initialContactFormData);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
				<TextField id='first-name' label='First Name' name='firstName' onChange={handleInputChange} type='text' value={contactFormData.firstName} required />
				<TextField id='last-name' label='Last Name' name='lastName' onChange={handleInputChange} type='text' value={contactFormData.lastName} required />
			</FormGroup>

			<FormGroup>
				<TextField id='email' label='Email Address' name='email' onChange={handleInputChange} type='email' value={contactFormData.email} required />
			</FormGroup>

			<FormGroup title='Query Type'>
				<RadioButton id='general-enquiry' checked={eq(contactFormData.queryType, 'general-enquiry')} label='General Enquiry' name='queryType' onChange={handleInputChange} value='general-enquiry' />
				<RadioButton id='support-request' checked={eq(contactFormData.queryType, 'support-request')} label='Support Request' name='queryType' onChange={handleInputChange} value='support-request' />
			</FormGroup>

			<FormGroup>
				<TextArea id='message' label='Message' name='message' onChange={handleInputChange} value={contactFormData.message} required />
			</FormGroup>

			<Button type='submit'>Submit</Button>
		</form>
	);
}
