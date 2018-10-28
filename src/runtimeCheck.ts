export const runtimeCheck = <T>(target: T): Promise<T>  => {
	return new Promise<T>((resolve: (resolvedValue: any | void) => void, reject: (rejectedValue: any | void) => void) => {
			const whatType: string = typeof target;
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
