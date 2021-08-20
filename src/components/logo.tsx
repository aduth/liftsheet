export enum LogoVariant {
	Inverted = 'inverted',
	Outline = 'outline',
}

interface LogoProps {
	size?: number;
	variant?: LogoVariant;
}

export default function Logo({ size = 42, variant }: LogoProps) {
	const path = `/assets/logo${variant ? '-' + variant : ''}.svg`;
	return <img src={path} alt="Logo" width={size} height={size} />;
}
