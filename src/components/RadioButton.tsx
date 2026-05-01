'use client';

import Image from 'next/image';

import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, useId } from 'react';

import radioCheckedImage from '@/assets/images/radio-checked.svg';
import radioUncheckedImage from '@/assets/images/radio-unchecked.svg';

type RadioButtonProps = {
	label: string;
} & Pick<ComponentPropsWithoutRef<'input'>, 'checked' | 'name' | 'onChange' | 'required' | 'value'>;

export default function ({ checked, label, name, onChange, required, value }: RadioButtonProps) {
	const id = useId();

	const className = clsx('border-grey-500 flex h-[51px] shrink-0 grow cursor-pointer items-center gap-100 rounded-lg border px-300', {
		'bg-green-200': checked,
	});

	return (
		<label className={className} htmlFor={id}>
			<input id={id} className='sr-only' checked={checked} name={name} onChange={onChange} type='radio' value={value} required={required} />
			<Image alt='' src={checked ? radioCheckedImage : radioUncheckedImage} unoptimized />

			<span className='font-karla text-grey-900 grow text-[18px]/[150%] antialiased select-none'>{label}</span>
		</label>
	);
}
