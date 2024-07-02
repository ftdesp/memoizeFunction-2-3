import { memoize } from './memoize'; // Asegúrate de importar la función correctamente

describe('memoize', () => {
    it('should return the correct result', () => {
        const add = (a: number, b: number) => a + b;
        const memoizedAdd = memoize(add);

        expect(memoizedAdd(1, 2)).toBe(3);
        expect(memoizedAdd(2, 3)).toBe(5);
    });

    it('should cache results for the same inputs', () => {
        const add = jest.fn((a: number, b: number) => a + b);
        const memoizedAdd = memoize(add);

        memoizedAdd(1, 2);
        memoizedAdd(1, 2);

        expect(add).toHaveBeenCalledTimes(1);
    });

    it('should work with different types of arguments', () => {
        const join = (a: string, b: string) => a + b;
        const memoizedJoin = memoize(join);

        expect(memoizedJoin('foo', 'bar')).toBe('foobar');
        expect(memoizedJoin('foo', 'baz')).toBe('foobaz');
    });

    it('should handle functions with no arguments', () => {
        const getValue = () => 42;
        const memoizedGetValue = memoize(getValue);

        expect(memoizedGetValue()).toBe(42);
        expect(memoizedGetValue()).toBe(42);
    });



});

