import { ReactNode } from 'react';

type ContainerProps = {
	children: ReactNode;
};

export default function ({ children }: ContainerProps) {
	return <div className='mx-auto flex w-[375px] flex-col py-400 md:w-[690px] md:py-1600 lg:w-[736px]'>{children}</div>;
}
