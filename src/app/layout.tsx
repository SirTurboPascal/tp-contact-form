import { Metadata } from 'next';
import { ReactNode } from 'react';

import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Contact Form',
};

type Props = {
	children: ReactNode;
};

export default function ({ children }: Props) {
	return (
		<html className='bg-green-200'>
			<body className='h-dvh py-400 md:py-1600'>{children}</body>
		</html>
	);
}
