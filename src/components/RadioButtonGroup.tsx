import { eq, map } from 'lodash';
import { ComponentPropsWithoutRef } from 'react';

import RadioButton from '@/components/RadioButton';

type RadioButtonGroupProps = {
	label: string;

	options: Record<string, string>;
} & Pick<ComponentPropsWithoutRef<'input'>, 'name' | 'onChange' | 'required' | 'value'>;

export default function ({ label, name, onChange, options, required, value }: RadioButtonGroupProps) {
	return (
		<div className='flex shrink-0 flex-col gap-100'>
			<span className='font-karla text-grey-900 shrink-0 self-start text-[16px]/[150%] antialiased select-none'>
				<>{label}</>

				{required && <span className='ml-100 font-bold text-green-600'>*</span>}
			</span>

			<div className='flex flex-col gap-300 md:flex-row'>
				{map(Object.entries(options), ([key, label]) => {
					return <RadioButton key={key} checked={eq(key, value)} name={name} label={label} onChange={onChange} value={key} required={required} />;
				})}
			</div>
		</div>
	);
}
