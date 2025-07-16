import { FC, ReactNode } from 'react';

interface ICardTitle {
	children: ReactNode;
}

const CardTitle: FC<ICardTitle> = ({ children }) => {
	return <div className='flex flex-row items-center'>{children}</div>;
};

export default CardTitle;
