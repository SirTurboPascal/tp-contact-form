'use client';

import { ChangeEvent, SubmitEvent, useState } from 'react';
import { z } from 'zod';

import Button from '@/components/Button';
import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import Container from '@/components/Container';
import FormGroup from '@/components/FormGroup';
import TextField from './TextField';

import { contactFormSchema } from '@/model/schemas/contact-form.schema';
import { ContactFormValues } from '@/model/types/contact-form-values';

const initialState: ContactFormValues = {
	email: '',
	familyName: '',
	givenName: '',
};

export default function () {
	const [values, setValues] = useState<ContactFormValues>(initialState);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setValues({
			...values,

			[name]: value,
		});
	};

	const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			contactFormSchema.parse(values);
		} catch (error) {
			if (error instanceof z.ZodError) {
				console.error(error);
			}
		}
	};

	return (
		<Container>
			<Card>
				<CardHeader>
					<h1 className='font-karla cursor-default text-[32px]/[100%] font-bold tracking-[-1px] select-none'>Contact Us</h1>
				</CardHeader>

				<form className='flex flex-col gap-300' onSubmit={handleSubmit}>
					<FormGroup>
						<TextField label='First Name' name='givenName' onChange={handleChange} value={values.givenName} required />
						<TextField label='Last Name' name='familyName' onChange={handleChange} value={values.familyName} required />
					</FormGroup>

					<FormGroup>
						<TextField label='Email Address' name='email' onChange={handleChange} value={values.email} required />
					</FormGroup>

					<Button text='Submit' type='submit' />
				</form>
			</Card>
		</Container>
	);
}
