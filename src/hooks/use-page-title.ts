import { useEffect, useContext } from 'preact/hooks';
import AppContext from '../context/app-context';

function usePageTitle(title?: string) {
	const { name } = useContext(AppContext);

	useEffect(() => {
		document.title = [name, title].filter(Boolean).join(' - ');
	}, [title]);
}

export default usePageTitle;
