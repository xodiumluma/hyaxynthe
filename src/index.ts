const process = <T>(target: T): Promise<T>  => {
		return new Promise<T>((resolve: (resolvedValue: any | void) => void, reject: (rejectedValue: any | void) => void) => {
			const whatType = typeof target;
		if (
			whatType === "boolean"   || 
			whatType === "string"    ||
			whatType === "number"    ||
			whatType === "undefined"
		) {
			reject("Cannot be " + whatType);
		}
	});
};

export default function (target: any): Promise<any> {
	return process<any>(target);
}
