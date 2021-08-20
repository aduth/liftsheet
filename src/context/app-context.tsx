import { createContext, ComponentChildren } from 'preact';

interface AppContextProviderProps {
	name: string;
	children: ComponentChildren;
}

const AppContext = createContext({
	name: '',
});

export function AppContextProvider({ name, children }: AppContextProviderProps) {
	return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
}

export default AppContext;
