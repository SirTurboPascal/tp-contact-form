import { ChangeEvent, useId } from 'react';

type TextFieldProps = {
	required: boolean;

	label: string;
	name: string;
	value: string;

	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function ({ label, name, onChange, required, value }: TextFieldProps) {
	const id = useId();

	return (
		<div className='flex grow flex-col gap-100'>
			<div className='font-karla flex items-center gap-100 text-[16px]/[150%] antialiased select-none'>
				<label className='text-grey-900' htmlFor={id}>
					<>{label}</>
				</label>

				{required && <span className='text-green-600'>*</span>}
			</div>

			<input id={id} className='border-grey-500 text-grey-900 h-[51px] rounded-lg border px-300 text-[18px]/[150%] antialiased' name={name} onChange={onChange} required={required} value={value} />
		</div>
	);
}
