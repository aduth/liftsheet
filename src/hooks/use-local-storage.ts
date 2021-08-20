import { useState } from 'preact/hooks';

function useLocalStorage(key: string): [string | null, (nextState: string | null) => void] {
	const [persistedValue, setPersistedValue] = useState(() => {
		try {
			return window.localStorage.getItem(key);
		} catch {
			return null;
		}
	});

	function setValue(value: string | null) {
		setPersistedValue(value);

		try {
			if (value) {
				window.localStorage.setItem(key, value);
			} else {
				window.localStorage.removeItem(key);
			}
		} catch {}
	}

	return [persistedValue, setValue];
}

export default useLocalStorage;
