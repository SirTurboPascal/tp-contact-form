import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export default function ({ children }: Props) {
	return <h1 className='font-karla text-[32px] leading-[100%] font-bold -tracking-[1px] antialiased'>{children}</h1>;
}
