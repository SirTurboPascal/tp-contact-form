import { ChangeEvent, FC, Fragment } from 'react';

interface IRadioButtonProps {
	checked: boolean;

	label: string;
	name: string;
	value: string;

	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: FC<IRadioButtonProps> = ({ checked, label, name, onChange, value }) => {
	const id = `${name}_${value}`;

	return (
		<label className='border-grey-900 relative flex h-[48px] grow cursor-pointer flex-row items-center rounded-[8px] border-[1px] px-[8px]' htmlFor={id}>
			<input id={id} className='mr-[8px] cursor-pointer' checked={checked} name={name} onChange={onChange} type='radio' value={value} />

			<Fragment>{label}</Fragment>
		</label>
	);
};

export default RadioButton;
