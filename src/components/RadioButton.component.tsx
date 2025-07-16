import { isUndefined } from 'lodash';
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

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (!isUndefined(navigator.vibrate)) navigator.vibrate(200);

		onChange(event);
	};

	return (
		<label className='border-grey-900 relative flex h-[48px] grow cursor-pointer flex-row items-center rounded-[8px] border-[1px] px-[8px]' htmlFor={id}>
			<input
				id={id}
				className='mr-[8px] size-[18px] cursor-pointer bg-cover bg-center bg-no-repeat checked:appearance-none checked:bg-[url(/images/icon-radio-selected.svg)]'
				checked={checked}
				name={name}
				onChange={handleChange}
				type='radio'
				value={value}
			/>

			<Fragment>{label}</Fragment>
		</label>
	);
};

export default RadioButton;
