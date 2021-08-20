import { useContext } from 'preact/hooks';
import Logo, { LogoVariant } from '../components/logo';
import Button from '../components/button';
import { Icons } from '../components/icon';
import AppContext from '../context/app-context';
import AuthContext from '../context/auth-context';

function LoggedOutIntro() {
	const { name } = useContext(AppContext);
	const { logIn } = useContext(AuthContext);

	return (
		<div class="logged-out-intro">
			<Logo variant={LogoVariant.Outline} size={100} />
			<h1>{name}</h1>
			<hr />
			<p className="logged-out-intro__description">
				{name} is a workout tracking application optimized for simple data entry. Unlike other
				workout tracking applications which use proprietary databases to store your log data, {name}{' '}
				uses Google Sheets, allowing you to export, modify, or do your own analysis on the raw
				training data.
			</p>
			<Button icon={Icons.Google} color="#2da366" onClick={logIn}>
				Connect with Google
			</Button>
		</div>
	);
}

export default LoggedOutIntro;
