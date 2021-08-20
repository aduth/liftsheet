import { useRoute } from 'wouter-preact';
import { ComponentType } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import { useMemo, useContext, useEffect } from 'preact/hooks';
import { LazyRouteLoader } from './types';
import PathsContext from './paths-context';

interface LazyRouteProps {
	path: string;
	loader: LazyRouteLoader;
	fallback?: ComponentType;
}

export default function LazyRoute({ path, loader, fallback }: LazyRouteProps) {
	const Component = useMemo(() => lazy(loader), [loader]);
	const [matches] = useRoute(path);
	const paths = useContext(PathsContext);
	useEffect(() => {
		paths.set(path, loader);
		return () => paths.delete(path);
	}, [paths, path, loader]);

	return matches ? (
		<Suspense fallback={fallback}>
			<Component />
		</Suspense>
	) : null;
}
