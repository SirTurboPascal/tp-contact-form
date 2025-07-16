import { FC, ReactNode } from 'react';

interface IFormGroupProps {
	children: ReactNode;
}

const FormGroup: FC<IFormGroupProps> = ({ children }) => {
	return <div className='desktop:flex-row flex flex-col gap-4'>{children}</div>;
};

export default FormGroup;
