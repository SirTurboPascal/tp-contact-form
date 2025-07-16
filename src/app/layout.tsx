import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

import '@/styles/globals.css';

const metadata: Metadata = {
	title: 'Contact Form',
};

interface ILayoutProps {
	children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<html className='overflow-hidden bg-green-200'>
			<body className='font-karla flex h-dvh flex-col antialiased'>{children}</body>
		</html>
	);
};

export default Layout;
export { metadata };
