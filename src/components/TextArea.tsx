import { ChangeEvent } from 'react';

import { EnterKeyHint } from '@/model/types/EnterKeyHint';

type Props = {
	required?: boolean;

	id: string;
	label: string;
	name: string;
	value: string;

	enterKeyHint: EnterKeyHint;

	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function ({ enterKeyHint, id, label, name, onChange, required, value }: Props) {
	return (
		<div className='group flex grow flex-col gap-100'>
			<label className='font-karla text-grey-900 flex gap-100 text-[16px] leading-[150%] antialiased' htmlFor={id}>
				<>{label}</>

				{required && <span className='font-bold text-green-600'>*</span>}
			</label>

			<textarea
				id={id}
				className='border-grey-500 font-karla min-h-[150px] resize-none rounded-lg border-[1px] px-300 py-100 leading-[150%] antialiased group-hover:border-green-600 focus:outline-green-600'
				enterKeyHint={enterKeyHint}
				name={name}
				onChange={onChange}
				required={required}
				value={value}
			/>
		</div>
	);
}
