export function range(from,to) {
    const arr = [];
    for (let i = from; i <= to; i++) {
        arr.push(i);
    }
    return arr;
}
export function min(a,b) {
    return a < b ? a : b;
}
export function max(a,b) {
    return a > b ? a : b;
}
export function find(arr = [],fn) {
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i],i)) {
			return arr[i];
		}
	}
	return null;
}
