'use client';

import { isNil } from 'lodash';
import { ChangeEvent, SubmitEvent, useState } from 'react';
import { z } from 'zod';

import Button from '@/components/Button';
import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import CheckBox from '@/components/CheckBox';
import Container from '@/components/Container';
import FormGroup from '@/components/FormGroup';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextField from '@/components/TextField';
import Textarea from '@/components/Textarea';

import { contactFormSchema } from '@/model/schemas/contact-form.schema';
import { ContactFormErrors } from '@/model/types/contact-form-errors';
import { ContactFormValues } from '@/model/types/contact-form-values';
import { QueryTypeValues } from '@/model/types/query-type-values';

const initialState: ContactFormValues = {
	consent: false,

	email: '',
	familyName: '',
	givenName: '',
	message: '',

	queryType: 'general-enquiry',
};

const radioButtonGroupOptions: Record<QueryTypeValues, string> = {
	'general-enquiry': 'General Enquiry',
	'support-request': 'Support Request',
};

export default function () {
	const [errors, setErrors] = useState<ContactFormErrors>();
	const [values, setValues] = useState<ContactFormValues>(initialState);

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;

		const newValue = event.target instanceof HTMLInputElement && event.target.type === 'checkbox' ? event.target.checked : value;
		setValues({ ...values, [name]: newValue });
	};

	const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		const result = contactFormSchema.safeParse(values);
		if (result.success) {
			window.alert(`Well done! You would have submitted these values: ${JSON.stringify(values)}`);

			setErrors({});
			setValues(initialState);

			return;
		}

		const properties = z.treeifyError(result.error).properties;
		if (!isNil(properties)) setErrors(Object.fromEntries(Object.entries(properties)));
	};

	return (
		<Container>
			<Card>
				<CardHeader>
					<h1 className='font-karla cursor-default text-[32px]/[100%] font-bold tracking-[-1px] select-none'>Contact Us</h1>
				</CardHeader>

				<form className='flex flex-col gap-300' onSubmit={handleSubmit} noValidate>
					<FormGroup>
						<TextField errors={errors?.givenName?.errors} label='First Name' name='givenName' onChange={handleChange} value={values.givenName} required />
						<TextField errors={errors?.familyName?.errors} label='Last Name' name='familyName' onChange={handleChange} value={values.familyName} required />
					</FormGroup>

					<FormGroup>
						<TextField errors={errors?.email?.errors} label='Email Address' name='email' onChange={handleChange} value={values.email} required />
					</FormGroup>

					<RadioButtonGroup label='Query Type' name='queryType' onChange={handleChange} options={radioButtonGroupOptions} value={values.queryType} required />
					<Textarea errors={errors?.message?.errors} label='Message' name='message' onChange={handleChange} value={values.message} required />
					<CheckBox checked={values.consent} errors={errors?.consent?.errors} label='I consent to being contacted by the team' name='consent' onChange={handleChange} required />

					<Button text='Submit' type='submit' />
				</form>
			</Card>
		</Container>
	);
}
