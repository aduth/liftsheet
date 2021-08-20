import { useState, useContext, useEffect } from 'preact/hooks';
import { Redirect } from 'wouter-preact';
import AuthContext from '../context/auth-context';

function AuthCallback() {
	const [isRedirecting, setIsRedirecting] = useState(false);
	const { setToken } = useContext(AuthContext);
	useEffect(() => {
		const token = new URLSearchParams(window.location.hash.slice(1)).get('access_token');
		if (token) {
			setToken(token);
		}

		setIsRedirecting(true);
	}, []);

	return isRedirecting ? <Redirect to="/" /> : null;
}

export default AuthCallback;
