import { h } from 'preact';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

(global as any).h = h;
