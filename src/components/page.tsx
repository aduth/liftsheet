import { ComponentChildren } from 'preact';
import Header from './header';
import usePageTitle from '../hooks/use-page-title';

interface PageProps {
	name: string;
	title?: string;
	children?: ComponentChildren;
}

function Page({ name, title, children }: PageProps) {
	usePageTitle(title);

	return (
		<div className={`page page--${name}`}>
			<Header />
			<div className="page__content">{children}</div>
		</div>
	);
}

export default Page;
