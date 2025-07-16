'use client';

import { eq } from 'lodash';
import { ChangeEvent, FormEvent, useState } from 'react';
import { z } from 'zod';

import Button from '@/components/Button.component';
import CheckBox from '@/components/CheckBox.component';
import FormGroup from '@/components/FormGroup.component';
import RadioButton from '@/components/RadioButton.component';
import RadioButtonGroup from '@/components/RadioButtonGroup.component';
import TextArea from '@/components/TextArea.component';
import TextField from '@/components/TextField.component';
import QueryType from '@/model/types/QueryType.type';

const FormData = z.object({
	consent: z.literal<boolean>(true, 'To submit this form, please consent to being contacted'),

	email: z.email('Please enter a valid email address'),
	firstName: z.string().trim().min(1, 'This field is required'),
	lastName: z.string().trim().min(1, 'This field is required'),
	message: z.string().trim().min(1, 'This field is required'),

	queryType: z.literal(['general-enquiry', 'support-request'] as QueryType[]),
});

type FormData = z.infer<typeof FormData>;

const initialState: FormData = {
	consent: false,

	email: '',
	firstName: '',
	lastName: '',
	message: '',
	queryType: 'general-enquiry',
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactForm = () => {
	const [formData, setFormData] = useState<FormData>(initialState);
	const [formErrors, setFormErrors] = useState<FormErrors>({});

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		try {
			FormData.parse(formData);

			alert(JSON.stringify(formData));
			setFormData(initialState);
		} catch (error) {
			if (error instanceof z.ZodError) {
				const errors: Partial<Record<keyof FormData, string>> = {};

				error.issues.forEach((issue) => {
					errors[issue.path[0] as keyof FormData] = issue.message;
				});

				setFormErrors(errors);
			}
		}
	};

	const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,

			[event.target.name]: event.target.checked,
		});
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
				<TextField error={formErrors.firstName} label='First Name' name='firstName' onChange={handleInputChange} value={formData.firstName} />
				<TextField error={formErrors.lastName} label='Last Name' name='lastName' onChange={handleInputChange} value={formData.lastName} />
			</FormGroup>

			<FormGroup>
				<TextField error={formErrors.email} label='Email Address' name='email' onChange={handleInputChange} value={formData.email} />
			</FormGroup>

			<RadioButtonGroup label='Query Type'>
				<RadioButton checked={eq(formData.queryType, 'general-enquiry')} label='General Enquiry' name='queryType' onChange={handleInputChange} value='general-enquiry' />
				<RadioButton checked={eq(formData.queryType, 'support-request')} label='Support Request' name='queryType' onChange={handleInputChange} value='support-request' />
			</RadioButtonGroup>

			<FormGroup>
				<TextArea error={formErrors.message} label='Message' name='message' onChange={handleInputChange} value={formData.message} />
			</FormGroup>

			<CheckBox error={formErrors.consent} checked={formData.consent} label='I consent to being contacted by the team' name='consent' onChange={handleCheckBoxChange} />

			<Button type='submit'>Submit</Button>
		</form>
	);
};

export default ContactForm;
