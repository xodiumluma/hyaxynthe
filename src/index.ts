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

export function hyaxynthe (target: any): Promise<any> {
	return process<any>(target);
}
