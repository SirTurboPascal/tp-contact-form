import clsx from 'clsx';

import { FC, ReactNode } from 'react';

import TypographyVariant from '@/model/types/TypographyVariant.type';

const baseClassName = 'shrink-0 select-none cursor-default';
const variantClassNames: Record<TypographyVariant, string> = {
	'card-title': 'text-grey-900 text-[36px] font-bold tracking-[-2px]',
};

interface ITypographyProps {
	children: ReactNode;
	variant: TypographyVariant;
}

const Typography: FC<ITypographyProps> = ({ children, variant }) => {
	return <p className={clsx(baseClassName, variantClassNames[variant])}>{children}</p>;
};

export default Typography;
