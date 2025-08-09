import Image from 'next/image';

import { ChangeEvent } from 'react';

import checkboxCheckedImage from '@/components/CheckBox/checkbox-checked.svg';
import checkboxUncheckedImage from '@/components/CheckBox/checkbox-unchecked.svg';

type Props = {
	checked: boolean;

	id: string;
	label: string;
	name: string;

	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function ({ checked, id, label, name, onChange }: Props) {
	const src = checked ? checkboxCheckedImage : checkboxUncheckedImage;

	return (
		<label className='flex cursor-pointer items-center gap-100' htmlFor={id}>
			<input id={id} className='sr-only' checked={checked} name={name} onChange={onChange} type='checkbox' />

			<Image alt='' src={src} unoptimized />

			<span className='font-karla text-grey-900 flex gap-100 text-[16px] leading-[150%] antialiased select-none'>{label}</span>
		</label>
	);
}
