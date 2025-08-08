import { ChangeEvent } from 'react';

type Props = {
	required?: boolean;

	id: string;
	label: string;
	name: string;
	value: string;

	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function ({ id, label, name, onChange, required, value }: Props) {
	return (
		<div className='flex flex-col gap-100'>
			<label className='font-karla text-grey-900 flex gap-100 text-[16px] leading-[150%] antialiased' htmlFor={id}>
				<>{label}</>

				{required && <span className='font-bold text-green-600'>*</span>}
			</label>

			<input
				id={id}
				className='border-grey-500 font-karla text-grey-900 h-[50px] rounded-lg border-[1px] px-300 text-lg leading-[150%] antialiased'
				name={name}
				onChange={onChange}
				required={required}
				type='text'
				value={value}
			/>
		</div>
	);
}
