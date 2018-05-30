import runMe from './index';
import { expect } from 'chai';
import 'mocha';


describe('Main function', () => {


	it('should return a Promise', () => {
		expect(typeof runMe({}).then).to.equal("function");
	});



});
