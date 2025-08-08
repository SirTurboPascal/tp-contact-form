import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export default function ({ children }: Props) {
	return <div className='flex flex-col gap-200 md:flex-row'>{children}</div>;
}
