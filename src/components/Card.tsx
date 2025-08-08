import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export default function ({ children }: Props) {
	return <div className='mx-auto flex w-[340px] flex-col gap-300 rounded-2xl bg-white p-300 shadow-md md:w-[690px] md:p-500 lg:w-[740px]'>{children}</div>;
}
