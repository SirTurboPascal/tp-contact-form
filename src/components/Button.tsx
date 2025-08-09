import { ReactNode } from 'react';

import { ButtonType } from '@/model/types/ButtonType';

type Props = {
	children: ReactNode;
	type: ButtonType;
};

export default function ({ children, type }: Props) {
	return (
		<button className='font-karla h-[50px] cursor-pointer rounded-lg bg-green-600 leading-[150%] font-bold text-white outline-none select-none hover:bg-green-900 focus:bg-green-900' type={type}>
			<>{children}</>
		</button>
	);
}
