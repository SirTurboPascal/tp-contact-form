import { ReactNode } from 'react';

type CardHeaderProps = {
	children: ReactNode;
};

export default function ({ children }: CardHeaderProps) {
	return <div className='flex shrink-0 items-center'>{children}</div>;
}
