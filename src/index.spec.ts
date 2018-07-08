import { hyaxynthe } from './index';
import { expect } from 'chai';




import chai = require("chai");
import chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert: Chai.Assert = chai.assert;









describe('Main function', (): void => {





	it('should return a Promise', (): void => {
		expect(hyaxynthe({})).to.be.instanceof(Promise);
	});






	// invalid types

	it('should return a rejected Promise given a boolean input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(false), false);
	});

	it('should return a rejected Promise given a string input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe("string"), false);
	});


	it('should return a rejected Promise given a numeric input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(4), false);
	});

	it('should return a rejected Promise given a float input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(4.0), false);
	});

	it('should return a rejected Promise given a NaN input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(+"a"), false);
	});

	it('should return a rejected Promise given a function', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(function () {}), false);
	});


	it('should return a rejected Promise given an undefined input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(void 0), false);
	});


	it('should return a rejected Promise given a null input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(null), false);
	});



});
