import { Metadata } from 'next';
import { Karla } from 'next/font/google';

import '@/styles/globals.css';

const karla = Karla({
	variable: '--font-karla',

	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Contact Form',
};

export default function ({ children }: LayoutProps<'/'>) {
	return (
		<html className={`${karla.variable} bg-green-200`}>
			<body>{children}</body>
		</html>
	);
}
