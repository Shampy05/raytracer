import { Tuple } from '../index';
const { divide, magnitude, multiply, negate, point, vector, equals, create, normalize, dot, cross } = Tuple;

describe('create a tuple', () => {
    test('function should return object with x, y, z, w values', () => {
        expect(create(2.1, 3, 4, 0)).toStrictEqual({
            x: 2.1,
            y: 3,
            z: 4,
            w: 0
        })
    })
})

describe('create a point', () => {
    test('function should return tuple with x, y, z, 1', () => {
        expect(point(2.1, 3, 4)).toStrictEqual(create(2.1, 3, 4, 1))
    })
})

describe('create a vector', () => {
    test('function should return tuple with x, y, z, 0', () => {
        expect(vector(2.1, 3, 4)).toStrictEqual(create(2.1, 3, 4, 0))
    })
})

describe('negate a tuple', () => {
    test('function should return the negated value of tuple', () => {
        expect(negate(create(1, -2, 3, -4))).toStrictEqual(create(-1, 2, -3, 4))
    })
})

describe('multiply by scalar', () => {
    test('function should return the tuple multiplied by scalar', () => {
        expect(multiply(create(1, -2, 3, -4), 3.5)).toStrictEqual(create(3.5, -7, 10.5, -14))
    })
})

describe('divide by scalar', () => {
    test('function should return the tuple divide by scalar', () => {
        expect(divide(create(1, -2, 3, -4), 2)).toStrictEqual(create(0.5, -1, 1.5, -2))
    })
})

describe('compare equality for tuples', () => {
    test('tuples A is equal to tuple B', () => {
        expect(equals(create(1, 2, 3, 0), create(1, 2, 3, 0))).toEqual
    })
    test('tuples A is not equal to tuple B', () => {
        expect(equals(create(1, 2, 3, 0), create(1, 2, 3, 1))).toBeFalsy
    })
})

describe('magnitude of vector', () => {
    test('function should return the magnitude of vector', () => {
        expect(magnitude(vector(1, 2, 3))).toBeCloseTo(Math.sqrt(14))
    })
})

describe('normalise a vector', () => {
    test('function should normalize the given vector', () => {
        expect(normalize(vector(4, 0, 0))).toStrictEqual(vector(1, 0, 0))
    })
})

describe('magnitude of normalised vector', () => {
    test('magnitude of normalised vector should be 1', () => {
        expect(magnitude(normalize(vector(1, 2, 3)))).toStrictEqual(1)
    })
})

describe('dot product of 2 tuples', () => {
    test('dot product of 2 tuples', () => {
        expect(dot(vector(1, 2, 3), vector(2, 3, 4))).toStrictEqual(20)
    })
})

describe('cross product of 2 vectors', () => {
    test('cross product of a and b', () => {
        expect(cross(vector(1, 2, 3), vector(2, 3, 4))).toStrictEqual(vector(-1, 2, -1))
    })
    test('cross product of b and a', () => {
        expect(cross(vector(2, 3, 4), vector(1, 2, 3))).toStrictEqual(vector(1, -2, 1))
    })
})