import { isUndefined } from 'lodash';
import { ChangeEvent, FC, Fragment } from 'react';

interface ICheckBoxProps {
	checked: boolean;

	error?: string;
	label: string;
	name: string;

	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<ICheckBoxProps> = ({ checked, error, label, name, onChange }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (!isUndefined(navigator.vibrate)) navigator.vibrate(200);

		onChange(event);
	};

	return (
		<label className='relative flex h-[48px] cursor-pointer flex-row items-center pb-[25px] select-none' htmlFor={name}>
			<input
				id={name}
				className='mr-[8px] size-[18px] cursor-pointer checked:appearance-none checked:bg-[url(/images/icon-checkbox-check.svg)]'
				checked={checked}
				onChange={handleChange}
				name={name}
				type='checkbox'
			/>

			<Fragment>{label}</Fragment>

			{!isUndefined(error) && <p className='text-red absolute bottom-0 left-[4px] cursor-default text-[14px] whitespace-nowrap select-none'>{error}</p>}
		</label>
	);
};

export default CheckBox;
