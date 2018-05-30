async function process (target: any): Promise<any> {
	return target;
}

export default function (target: any): Promise<any> {
	return process(target);
}
