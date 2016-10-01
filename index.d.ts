export function request(method: string, url: string, accept?: string): PromiseLike<string>;
export function getJSON<T>(url: string): PromiseLike<T>;