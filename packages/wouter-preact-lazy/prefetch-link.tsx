import { Link, useRouter } from 'wouter-preact';
import { JSX } from 'preact';
import { useCallback, useContext } from 'preact/hooks';
import PathsContext from './paths-context';

interface PrefetchLinkProps extends Omit<JSX.HTMLAttributes, 'href'> {
	to: string;
}

export function over<F extends (...args: any[]) => any>(
	...fns: (F | undefined)[]
): (...args: Parameters<F>) => void {
	return (...args) => fns.forEach((fn) => fn?.(...args));
}

export default function PrefetchLink({ to, onMouseEnter, ...props }: PrefetchLinkProps) {
	const router = useRouter();
	const paths = useContext(PathsContext);
	const prefetch = useCallback(() => {
		for (const [path, loader] of paths.entries()) {
			const [isMatch] = router.matcher(path, to);
			if (isMatch) {
				loader();
				break;
			}
		}
	}, [to, paths, router]);

	return <Link to={to} {...props} onMouseEnter={over(prefetch, onMouseEnter)} />;
}
