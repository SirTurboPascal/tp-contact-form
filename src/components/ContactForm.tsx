'use client';

import { ChangeEvent, SubmitEvent, useState } from 'react';

import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import FormGroup from '@/components/FormGroup';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';

import { ContactFormValues } from '@/types/contact-form-values.type';

const initialState: ContactFormValues = {
	familyName: '',
	givenName: '',
};

export default function () {
	const [values, setValues] = useState<ContactFormValues>(initialState);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();

		console.log(values);
	};

	return (
		<Card>
			<CardHeader>
				<Typography variant='card-header'>Contact Us</Typography>
			</CardHeader>

			<form className='flex shrink-0 flex-col' onSubmit={handleSubmit}>
				<FormGroup>
					<TextField label='First Name' name='givenName' onChange={handleInputChange} value={values.givenName} required />
					<TextField label='Last Name' name='familyName' onChange={handleInputChange} value={values.familyName} required />
				</FormGroup>
			</form>
		</Card>
	);
}
