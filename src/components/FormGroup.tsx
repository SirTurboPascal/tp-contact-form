import { isUndefined } from 'lodash';
import { ReactNode } from 'react';

type Props = {
	title?: string;

	children: ReactNode;
};

export default function ({ children, title }: Props) {
	return (
		<div className='flex flex-col gap-100'>
			{!isUndefined(title) && <p className='font-karla text-grey-900 flex gap-100 text-[16px] leading-[150%] antialiased'>{title}</p>}

			<div className='flex flex-col gap-200 md:flex-row'>{children}</div>
		</div>
	);
}
