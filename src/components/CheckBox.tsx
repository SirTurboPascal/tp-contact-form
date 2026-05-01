'use client';

import Image from 'next/image';

import { isEmpty, map } from 'lodash';
import { ComponentPropsWithoutRef, useId } from 'react';

import checkboxCheckedImage from '@/assets/images/checkbox-checked.svg';
import checkboxUncheckedImage from '@/assets/images/checkbox-unchecked.svg';

type CheckBoxProps = {
	label: string;

	errors: string[] | undefined;
} & Pick<ComponentPropsWithoutRef<'input'>, 'checked' | 'name' | 'onChange' | 'required'>;

export default function ({ checked, errors, label, name, onChange, required }: CheckBoxProps) {
	const id = useId();

	return (
		<div className='flex shrink-0 flex-col gap-100'>
			<label className='flex cursor-pointer items-center gap-200 self-start' htmlFor={id}>
				<input id={id} className='sr-only' checked={checked} name={name} onChange={onChange} required={required} type='checkbox' />
				<Image className='select-none' alt='' src={checked ? checkboxCheckedImage : checkboxUncheckedImage} unoptimized />

				<span className='font-karla text-grey-900 text-[16px]/[150%] antialiased select-none'>
					<>{label}</>

					{required && <span className='ml-100 font-bold text-green-600'>*</span>}
				</span>
			</label>

			{!isEmpty(errors) && (
				<ul className='flex shrink-0 flex-col self-start'>
					{map(errors, (error) => {
						return (
							<li key={error} className='font-karla text-red cursor-default text-[16px]/[150%] break-normal select-none'>
								<>{error}</>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
