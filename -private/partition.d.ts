export default function partition<T>(iterator: Iterable<T>, predicate: (item: T) => boolean): [T[], T[]];
