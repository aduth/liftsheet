import { ComponentChildren } from 'preact';
import clsx from 'clsx';
import Icon, { Icons } from './icon';

export enum ButtonVariant {
	Outline = 'outline',
}

interface ButtonProps {
	children: ComponentChildren;
	onClick?: () => void;
	color?: string;
	icon?: Icons;
	variant?: ButtonVariant;
}

function Button({ color, icon, variant, onClick, children }: ButtonProps) {
	let style;
	if (color) {
		switch (variant) {
			case ButtonVariant.Outline:
				style = { color: color };
				break;

			default:
				style = { backgroundColor: color };
		}
	}

	const classes = clsx('button', variant && `button--${variant}`);

	return (
		<button type="button" onClick={() => onClick?.()} style={style} className={classes}>
			{icon ? <Icon icon={icon} size={18} className="button__icon" /> : null}
			{children}
		</button>
	);
}

export default Button;
