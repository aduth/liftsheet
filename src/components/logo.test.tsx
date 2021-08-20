import { render } from '@testing-library/preact';
import { expect } from 'chai';
import Logo from './logo';

describe('Logo', () => {
	it('has default width and height', () => {
		const { getByAltText } = render(<Logo />);

		const image = getByAltText('Logo');

		expect(image.getAttribute('width')).to.equal('42');
		expect(image.getAttribute('height')).to.equal('42');
	});
});
