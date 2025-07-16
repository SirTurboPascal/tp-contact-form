import { lowerCase } from 'lodash';
import { ChangeEvent, FC } from 'react';

interface ITextAreaProps {
	required?: boolean;

	label: string;
	name: string;
	value: string;

	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<ITextAreaProps> = ({ label, name, onChange, required, value }) => {
	const placeholder = `Enter ${lowerCase(label)}...`;

	return (
		<div className='flex grow flex-col'>
			<label className='text-grey-900 mb-[4px] shrink-0 pl-[4px] text-[14px] tracking-[-0.4px] select-none' htmlFor={name}>
				{label}
			</label>

			<textarea
				className='border-grey-900 font-karla h-[124px] shrink-0 resize-none rounded-[8px] border-[1px] p-[8px] focus:outline-green-600'
				id={name}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				value={value}
			/>
		</div>
	);
};

export default TextArea;
