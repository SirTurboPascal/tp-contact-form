import clsx from 'clsx';

import { isUndefined, lowerCase } from 'lodash';
import { ChangeEvent, FC } from 'react';

interface ITextAreaProps {
	required?: boolean;

	error?: string;
	label: string;
	name: string;
	value: string;

	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<ITextAreaProps> = ({ error, label, name, onChange, required, value }) => {
	const borderColorClassName = isUndefined(error) ? 'border-grey-900' : 'border-red';
	const placeholder = `Enter ${lowerCase(label)}...`;

	return (
		<div className='relative flex grow flex-col pb-[25px]'>
			<label className='text-grey-900 mb-[4px] shrink-0 pl-[4px] text-[14px] whitespace-nowrap select-none' htmlFor={name}>
				{label}
			</label>

			<textarea
				className={clsx(borderColorClassName, 'font-karla h-[124px] shrink-0 resize-none rounded-[8px] border-[1px] p-[8px] focus:outline-green-600')}
				id={name}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				value={value}
			/>

			{!isUndefined(error) && <p className='text-red absolute bottom-0 left-[4px] cursor-default overflow-hidden text-[14px] whitespace-nowrap select-none'>{error}</p>}
		</div>
	);
};

export default TextArea;
