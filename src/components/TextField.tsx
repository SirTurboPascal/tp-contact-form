import { clsx } from 'clsx';
import { isEmpty, map } from 'lodash';
import { ComponentPropsWithoutRef, useId } from 'react';

type TextFieldProps = {
	label: string;

	errors: string[] | undefined;
} & Pick<ComponentPropsWithoutRef<'input'>, 'name' | 'onChange' | 'required' | 'type' | 'value'>;

export default function ({ errors, label, name, onChange, required, type = 'text', value }: TextFieldProps) {
	const id = useId();

	const inputClassName = clsx(
		'font-karla h-[51px] w-full cursor-pointer rounded-lg border px-300 text-[18px]/[150%] antialiased',

		isEmpty(errors) ? 'border-grey-500 outline-green-600 hover:border-green-600' : 'border-red outline-red',
	);

	return (
		<div className='flex shrink-0 grow flex-col gap-100'>
			<label className='font-karla text-grey-900 cursor-pointer self-start text-[16px]/[150%] antialiased select-none' htmlFor={id}>
				<>{label}</>

				{required && <span className='ml-100 font-bold text-green-600'>*</span>}
			</label>

			<input id={id} className={inputClassName} name={name} onChange={onChange} required={required} type={type} value={value} />

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
