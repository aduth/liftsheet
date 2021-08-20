import { Link } from 'wouter-preact';
import Logo, { LogoVariant } from './logo';
import UserAvatar from './user-avatar';

function Header() {
	return (
		<header className="header">
			<Link href="/">
				<a>
					<Logo variant={LogoVariant.Inverted} />
				</a>
			</Link>
			<UserAvatar />
		</header>
	);
}

export default Header;
