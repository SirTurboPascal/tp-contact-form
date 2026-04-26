import { ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
};

export default function ({ children }: CardProps) {
	return <div className='mx-auto flex w-[343px] flex-col gap-400 rounded-2xl bg-white p-300 md:w-[690px] md:p-500 lg:w-[736px]'>{children}</div>;
}
