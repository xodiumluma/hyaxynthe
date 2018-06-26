const process = <T>(target: T): Promise<T>  => {
		return new Promise<T>((resolve: (resolvedValue: any | void) => void, reject: (rejectedValue: any | void) => void) => {
		if (typeof target === "boolean") {
			reject("Cannot be boolean");
		}
	});
};

export default function (target: any): Promise<any> {
	return process<any>(target);
}
