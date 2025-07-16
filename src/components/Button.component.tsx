import { FC, ReactNode } from 'react';

import ButtonType from '@/model/types/ButtonType.type';

interface IButtonProps {
	children: ReactNode;
	type: ButtonType;
}

const Button: FC<IButtonProps> = ({ children, type }) => {
	return (
		<button className='h-[48px] cursor-pointer rounded-[8px] bg-green-600 font-bold tracking-[-0.4px] text-white select-none focus:outline-none' type={type}>
			{children}
		</button>
	);
};

export default Button;
