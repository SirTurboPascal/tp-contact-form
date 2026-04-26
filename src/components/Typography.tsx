import { clsx } from 'clsx';
import { ReactNode } from 'react';

import { TypographyConfig } from '@/types/typography-config.type';
import { TypographyVariant } from '@/types/typography-variant.type';

const commonStyles = 'font-karla antialiased';

const variantStyles: Record<TypographyVariant, TypographyConfig> = {
	'card-header': { styles: 'text-[32px]/[100%] font-bold -tracking-[1px]', as: 'h1' },
};

type TypographyProps = {
	children: ReactNode;
	variant: TypographyVariant;
};

export default function ({ children, variant }: TypographyProps) {
	const { as: Component, styles } = variantStyles[variant];

	const className = clsx(commonStyles, styles);
	return <Component className={className}>{children}</Component>;
}
