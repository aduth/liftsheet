import { createContext, ComponentChildren } from 'preact';
import { useMemo, useCallback } from 'preact/hooks';
import useLocalStorage from '../hooks/use-local-storage';

interface AuthContextProviderProps {
	children: ComponentChildren;
}

interface AuthContextValue {
	token: string | null;
	isLoggedIn: boolean;
	logIn: () => void;
	setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextValue>({
	token: null,
	isLoggedIn: false,
	logIn: () => {},
	setToken: () => {},
});

export function AuthContextProvider({ children }: AuthContextProviderProps) {
	const [token, setToken] = useLocalStorage('token');

	const logIn = useCallback(() => {
		const url = new URL(import.meta.env.VITE_AUTH_ENDPOINT_URL as string);
		url.searchParams.set('client_id', import.meta.env.VITE_AUTH_CLIENT_ID as string);
		url.searchParams.set(
			'redirect_uri',
			new URL('/auth/callback', import.meta.env.VITE_BASE_URL as string).toString(),
		);
		url.searchParams.set('response_type', 'token');
		// url.searchParams.set('login_hint', '115537347304134706507');
		url.searchParams.set('scope', import.meta.env.VITE_AUTH_SCOPES as string);

		location.href = url.toString();
	}, []);

	const value = useMemo(
		() => ({
			token,
			isLoggedIn: !!token,
			setToken,
			logIn,
		}),
		[token],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
