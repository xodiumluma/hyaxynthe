import runMe from './index';
import { expect } from 'chai';
import 'mocha';

import chai = require("chai");
import chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert: any = chai.assert;


describe('Main function', () => {


	it('should return a Promise', () => {
		expect(runMe({})).to.be.instanceof(Promise);
	});

	it('should return a rejected Promise given a boolean input', async (): Promise<void> => {
		return assert.isRejected(runMe(false), false);
	});

	it('should return a rejected Promise given a string input', async (): Promise<void> => {
		return assert.isRejected(runMe("string"), false);
	});


	it('should return a rejected Promise given a numeric input', async (): Promise<void> => {
		return assert.isRejected(runMe(4), false);
	});

	it('should return a rejected Promise given an undefined input', async (): Promise<void> => {
		return assert.isRejected(runMe(void 0), false);
	});


});
