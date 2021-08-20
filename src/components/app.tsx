import { LazyRoute } from '@liftsheet/wouter-preact-lazy';
import { AppContextProvider } from '../context/app-context';
import { AuthContextProvider } from '../context/auth-context';

export default function App() {
	return (
		<AuthContextProvider>
			<AppContextProvider name="LiftSheet">
				<LazyRoute path="/" loader={() => import('../routes/home')} />
				<LazyRoute path="/about" loader={() => import('../routes/about')} />
				<LazyRoute path="/auth/callback" loader={() => import('../routes/auth-callback')} />
			</AppContextProvider>
		</AuthContextProvider>
	);
}
