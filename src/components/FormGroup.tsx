import { ReactNode } from 'react';

type FormGroupProps = {
	children: ReactNode;
};

export default function ({ children }: FormGroupProps) {
	return <div className='flex flex-col gap-200 md:flex-row'>{children}</div>;
}
