const primitiveTypes = ['string', 'bigint', 'number', 'boolean'];

/**
 * Check whether a value is a primitive
 * @param input The input to check
 * @copyright Copyright © 2020 The Sapphire Project and its contributors
 * @license MIT (https://github.com/sapphire-project/utilities/blob/main/LICENSE.md)
 */
export function isPrimitive(input: unknown): input is string | bigint | number | boolean {
	return primitiveTypes.includes(typeof input);
}

/**
 * Verify if the input is an object literal (or class).
 * @param input The object to verify
 * @copyright Copyright © 2020 The Sapphire Project and its contributors
 * @license MIT (https://github.com/sapphire-project/utilities/blob/main/LICENSE.md)

 */
export function isObject(input: unknown): input is Record<PropertyKey, unknown> {
	return typeof input === 'object' && input ? input.constructor === Object : false;
}

/**
 * Deep clone an object
 * @param source The object to clone
 * @copyright Copyright © 2020 The Sapphire Project and its contributors
 * @license MIT (https://github.com/sapphire-project/utilities/blob/main/LICENSE.md)

 */
export function deepClone<T>(source: T): T {
	// Check if it's a primitive (with exception of function and null, which is typeof object)
	if (source === null || isPrimitive(source)) return source;
	if (Array.isArray(source)) {
		const output = ([] as unknown) as T & T extends (infer S)[] ? S[] : never;
		for (const value of source) output.push(deepClone(value));
		return (output as unknown) as T;
	}
	if (isObject(source)) {
		const output = {} as Record<PropertyKey, unknown>;
		for (const [key, value] of Object.entries(source)) output[key] = deepClone(value);
		return (output as unknown) as T;
	}
	if (source instanceof Map) {
		const output = (new (source.constructor as MapConstructor)() as unknown) as T & T extends Map<infer K, infer V> ? Map<K, V> : never;
		for (const [key, value] of source.entries()) output.set(key, deepClone(value));
		return (output as unknown) as T;
	}
	if (source instanceof Set) {
		const output = (new (source.constructor as SetConstructor)() as unknown) as T & T extends Set<infer K> ? Set<K> : never;
		for (const value of source.values()) output.add(deepClone(value));
		return (output as unknown) as T;
	}
	return source;
}
