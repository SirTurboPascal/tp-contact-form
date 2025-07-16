import { FC, ReactNode } from 'react';

interface ICardProps {
	children: ReactNode;
}

const Card: FC<ICardProps> = ({ children }) => {
	return <div className='desktop:w-[800px] flex w-[360px] flex-col gap-4 overflow-hidden rounded-[12px] bg-white p-[32px] shadow-md'>{children}</div>;
};

export default Card;
