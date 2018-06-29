import { hyaxynthe } from './index';
import { expect } from 'chai';
import 'mocha';

import chai = require("chai");
import chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert: any = chai.assert;


describe('Main function', () => {


	it('should return a Promise', () => {
		expect(hyaxynthe({})).to.be.instanceof(Promise);
	});

	it('should return a rejected Promise given a boolean input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(false), false);
	});

	it('should return a rejected Promise given a string input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe("string"), false);
	});


	it('should return a rejected Promise given a numeric input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(4), false);
	});

	it('should return a rejected Promise given an undefined input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(void 0), false);
	});


});
