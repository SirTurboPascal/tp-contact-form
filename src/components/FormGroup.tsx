import { ReactNode } from 'react';

type FormGroupProps = {
	children: ReactNode;
};

export default function ({ children }: FormGroupProps) {
	return <div className='flex flex-col gap-300 md:flex-row'>{children}</div>;
}
