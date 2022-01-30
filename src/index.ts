import { runtimeCheck } from './runtimeCheck';



export const parameterCheck = <T> (...target: ReadonlyArray<T>): Promise<T> => {
	if (!arguments.length) { 
		return Promise.reject("hyaxynthe does not support no input. Please provide an object or array input"); 
	} 
	if (arguments.length > 1) { 
		return Promise.reject("hyaxynthe only supports one input"); 
	}
	return runtimeCheck<T>(target[0]);
}
