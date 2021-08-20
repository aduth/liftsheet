import { ConfigEnv, defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default ({ mode }: ConfigEnv) =>
	defineConfig({
		base: mode === 'production' ? 'https://liftsheet.com' : 'http://localhost:3000',
		esbuild: {
			jsxFactory: 'h',
			jsxFragment: 'Fragment',
			jsxInject: `import { h, Fragment } from 'preact';`,
		},
		plugins: [preact()],
	});
