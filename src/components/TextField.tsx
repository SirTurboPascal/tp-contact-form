import { ComponentPropsWithoutRef, useId } from 'react';

type TextFieldProps = {
	label: string;
} & Pick<ComponentPropsWithoutRef<'input'>, 'name' | 'onChange' | 'required' | 'type' | 'value'>;

export default function ({ label, name, onChange, required, type = 'text', value }: TextFieldProps) {
	const id = useId();

	return (
		<div className='flex shrink-0 grow flex-col gap-100'>
			<label className='font-karla text-grey-900 cursor-pointer self-start text-[16px]/[150%] antialiased select-none' htmlFor={id}>
				<>{label}</>

				{required && <span className='ml-100 font-bold text-green-600'>*</span>}
			</label>

			<input
				id={id}
				className='border-grey-500 font-karla h-[51px] w-full cursor-pointer rounded-lg border px-300 text-[18px]/[150%] antialiased outline-green-600 hover:border-green-600'
				name={name}
				onChange={onChange}
				required={required}
				type={type}
				value={value}
			/>
		</div>
	);
}
