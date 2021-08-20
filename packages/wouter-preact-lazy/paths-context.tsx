import { createContext } from 'preact';
import { LazyRouteLoader } from './types';

export default createContext(new Map<string, LazyRouteLoader>());
