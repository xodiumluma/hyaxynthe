import { hyaxynthe } from './index';
import { expect } from 'chai';




import chai = require("chai");
import chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert: Chai.Assert = chai.assert;









describe('Main function', (): void => {





	it('should return a Promise', (): void => {
		expect(hyaxynthe<object>({})).to.be.instanceof(Promise);
	});






	// invalid types

	it('should return a rejected Promise given a boolean input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe<boolean>(false), false);
	});

	it('should return a rejected Promise given a string input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe<string>("string"), false);
	});


	it('should return a rejected Promise given a numeric input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe<number>(4), false);
	});

	it('should return a rejected Promise given a float input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe<number>(4.0), false);
	});

	it('should return a rejected Promise given a NaN input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe<number>(+"a"), false);
	});

	it('should return a rejected Promise given a function', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe<Function>(function () {}), false);
	});


	it('should return a rejected Promise given an undefined input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe<any>(void 0), false);
	});


	it('should return a rejected Promise given a null input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe<any>(null), false);
	});


	// invalid input lengths
	
	it('should return a rejected Promise given no input', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe(), false);
	});

	it('should return a rejected Promise given two empty objects (multiple valid inputs)', async (): Promise<void> => {
		return assert.isRejected(hyaxynthe<object>({}, {}), false);
	});

});
