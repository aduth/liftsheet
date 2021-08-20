import { stub } from 'sinon';
import { expect } from 'chai';
import { over } from './prefetch-link';

describe('over', () => {
	it('calls each function with args and returns undefined', () => {
		const fn1 = stub().returns(null);
		const fn2 = stub().returns(null);

		const result = over(fn1, fn2)(1, 2);

		expect(fn1).to.have.been.calledOnceWith(1, 2);
		expect(fn2).to.have.been.calledOnceWith(1, 2);
		expect(result).to.be.undefined;
	});
});
