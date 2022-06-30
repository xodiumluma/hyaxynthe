export const runtimeCheck = <T>(target: T): Promise<T> => new Promise<T>(
  (
    resolve: (resolvedValue: any | void) => void,
    reject: (rejectedValue: string) => void
  ) => {
    const whatType = typeof target;
    if (
      whatType === "bigint"    ||
      whatType === "boolean"   ||
      whatType === "function"  ||
      whatType === "number"    ||
      whatType === "string"    ||
      whatType === "symbol"    ||
      whatType === "undefined" ||
      (whatType === "object" && `${target}` === `null`)
    ) {
      reject(`Cannot be ${whatType}`);
    }
  }
);