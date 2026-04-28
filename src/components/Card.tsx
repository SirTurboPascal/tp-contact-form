import { ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
};

export default function ({ children }: CardProps) {
	return <div className='flex shrink-0 flex-col gap-400 rounded-2xl bg-white p-300 md:p-500'>{children}</div>;
}
