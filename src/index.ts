const process = <T>(target: T): Promise<T>  => {
		return new Promise<T>((resolve: (resolvedValue: any | void) => void, reject: (rejectedValue: any | void) => void) => {
			const whatType = typeof target;
		if (
			whatType === "boolean"   || 
			whatType === "string"    ||
			whatType === "number"    ||
			whatType === "function"  ||
			whatType === "undefined" ||
			(whatType === "object" && target + "" === "null")
		) {
			reject("Cannot be " + whatType);
		}
	});
};

export function hyaxynthe (...target: any[]): Promise<any> {
	if (!arguments.length) { 
		return Promise.reject("hyaxynthe does not support no input. Please provide an object or array input"); 
	} 
	if (arguments.length > 1) { 
		return Promise.reject("hyaxynthe only supports one input"); 
	}
	return process<any>(target.pop());
}
