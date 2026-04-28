import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
	text: string;
} & Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'type'>;

export default function ({ onClick, text, type }: ButtonProps) {
	return (
		<button className='group relative flex h-[59px] cursor-pointer items-center overflow-hidden rounded-lg bg-green-600 select-none' onClick={onClick} type={type}>
			<div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-100 outline-none group-hover:opacity-50' />

			<span className='font-karla relative grow text-center text-[18px]/[150%] font-bold text-white antialiased'>{text}</span>
		</button>
	);
}
