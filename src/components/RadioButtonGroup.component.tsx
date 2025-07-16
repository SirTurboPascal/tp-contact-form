import { FC, ReactNode } from 'react';

interface IRadioButtonGroup {
	label: string;

	children: ReactNode;
}

const RadioButtonGroup: FC<IRadioButtonGroup> = ({ children, label }) => {
	return (
		<div className='flex flex-col'>
			<p className='text-grey-900 mb-[4px] shrink-0 pl-[4px] text-[14px] tracking-[-0.4px] select-none'>{label}</p>

			<div className='desktop:flex-row flex flex-col gap-4'>{children}</div>
		</div>
	);
};

export default RadioButtonGroup;
