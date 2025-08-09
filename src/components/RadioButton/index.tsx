import Image from 'next/image';

import { ChangeEvent } from 'react';

import radioCheckedImage from '@/components/RadioButton/radio-checked.svg';
import radioUncheckedImage from '@/components/RadioButton/radio-unchecked.svg';

type Props = {
	checked: boolean;

	id: string;
	label: string;
	name: string;
	value: string;

	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function ({ checked, id, label, name, onChange, value }: Props) {
	const src = checked ? radioCheckedImage : radioUncheckedImage;

	return (
		<label className='border-grey-500 flex h-[50px] grow cursor-pointer items-center gap-100 rounded-lg border-[1px] px-300 hover:border-green-600' htmlFor={id}>
			<input id={id} className='sr-only' checked={checked} name={name} onChange={onChange} type='radio' value={value} />

			<Image alt='' src={src} unoptimized />

			<span className='font-karla text-grey-900 flex gap-100 text-[16px] leading-[150%] antialiased select-none'>{label}</span>
		</label>
	);
}
