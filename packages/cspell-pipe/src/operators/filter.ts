import { isAsyncIterable } from '../helpers/util';
import { PipeFn } from '../internalTypes';

export function opFilterAsync<T, S extends T>(filterFn: (v: T) => v is S): (iter: AsyncIterable<T>) => AsyncIterable<S>;
export function opFilterAsync<T>(filterFn: (v: T) => boolean): (iter: AsyncIterable<T>) => AsyncIterable<T>;
export function opFilterAsync<T>(filterFn: (v: T) => boolean): (iter: AsyncIterable<T>) => AsyncIterable<T> {
    async function* fn(iter: Iterable<T> | AsyncIterable<T>) {
        for await (const v of iter) {
            if (filterFn(v)) yield v;
        }
    }

    return fn;
}

export function opFilterSync<T, S extends T>(filterFn: (v: T) => v is S): (iter: Iterable<T>) => Iterable<S>;
export function opFilterSync<T>(filterFn: (v: T) => boolean): (iter: Iterable<T>) => Iterable<T>;
export function opFilterSync<T>(filterFn: (v: T) => boolean): (iter: Iterable<T>) => Iterable<T> {
    function* fn(iter: Iterable<T>) {
        for (const v of iter) {
            if (filterFn(v)) yield v;
        }
    }

    return fn;
}

export function opFilter<T, S extends T>(fn: (v: T) => v is S): PipeFn<T, S>;
export function opFilter<T>(fn: (v: T) => boolean): PipeFn<T, T>;
export function opFilter<T>(fn: (v: T) => boolean): PipeFn<T, T> {
    const asyncFn = opFilterAsync(fn);
    const syncFn = opFilterSync(fn);

    function _(i: Iterable<T>): Iterable<T>;
    function _(i: AsyncIterable<T>): AsyncIterable<T>;
    function _(i: Iterable<T> | AsyncIterable<T>): Iterable<T> | AsyncIterable<T> {
        return isAsyncIterable(i) ? asyncFn(i) : syncFn(i);
    }
    return _;
}
