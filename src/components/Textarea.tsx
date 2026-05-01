'use client';

import { clsx } from 'clsx';
import { isEmpty, map } from 'lodash';
import { ComponentPropsWithoutRef, useId } from 'react';

type TextareaProps = {
	label: string;

	errors: string[] | undefined;
} & Pick<ComponentPropsWithoutRef<'textarea'>, 'name' | 'onChange' | 'required' | 'value'>;

export default function ({ errors, label, name, onChange, required, value }: TextareaProps) {
	const id = useId();

	const textareaClassName = clsx(
		'font-karla h-[105px] rounded-lg border px-300 py-150 text-[18px]/[150%] antialiased resize-none',

		isEmpty(errors) ? 'border-grey-500 outline-green-600 hover:border-green-600' : 'border-red outline-red',
	);

	return (
		<div className='flex flex-col gap-100'>
			<label className='font-karla text-grey-900 shrink-0 cursor-pointer self-start text-[16px]/[150%] antialiased select-none' htmlFor={id}>
				<>{label}</>

				{required && <span className='ml-100 font-bold text-green-600'>*</span>}
			</label>

			<textarea id={id} className={textareaClassName} name={name} onChange={onChange} required={required} value={value} />

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
