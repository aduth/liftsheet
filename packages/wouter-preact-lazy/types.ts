import { ComponentType } from 'preact';

export type LazyRouteLoader = () => Promise<{ default: ComponentType }>;
