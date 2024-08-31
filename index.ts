import { EPSILON } from "./constants";

interface Tuple {
    x: number;
    y: number;
    z: number;
    w: number;
}

interface Vector extends Tuple {}
interface Point extends Tuple {}

class TupleOperations {
    static create(x: number, y: number, z: number, w: number): Tuple {
        return {x, y, z, w};
    }

    static point(x: number, y: number, z: number): Point {
        return this.create(x, y, z, 1) as Point;
    }

    static vector(x: number, y: number, z: number): Vector {
        return this.create(x, y, z, 0) as Vector;
    }

    static equals(a: Tuple, b: Tuple): boolean {
        return Math.abs(a.x - b.x) < EPSILON &&
            Math.abs(a.y - b.y) < EPSILON &&
            Math.abs(a.z - b.z) < EPSILON &&
            Math.abs(a.w - b.w) < EPSILON;
    }

    static add(a: Tuple, b: Tuple): Tuple {
        return this.create(
            a.x + b.x,
            a.y + b.y,
            a.z + b.z,
            a.w + b.w,
        );
    }

    static subtract(a: Tuple, b: Tuple): Tuple {
        return this.create(
            a.x - b.x,
            a.y - b.y,
            a.z - b.z,
            a.w - b.w,
        );
    }

    static negate(a: Tuple): Tuple {
        return this.create(-a.x, -a.y, -a.z, -a.w)
    }

    static multiply<T extends Tuple | number>(a: Tuple, b: T): Tuple {
        if (typeof b === 'number') {
            return this.create(
                a.x * b,
                a.y * b,
                a.z * b,
                a.w * b,
            )
        } else {
            return this.create(
                a.x * b.x,
                a.y * b.y,
                a.z * b.z,
                a.w * b.w,
            )
        }
    }

    static divide(a: Tuple, scalar: number): Tuple {
        return this.multiply(a, 1 / scalar)
    }

    static magnitude(a: Tuple): number {
        return Math.hypot(a.x, a.y, a.z, a.w)
    }

    static normalize(a: Tuple): Tuple {
        const mag = this.magnitude(a)
        return this.divide(a, mag)
    }

    static dot(a: Tuple, b: Tuple): number {
        return a.x * b.x +
            a.y * b.y +
            a.z * b.z +
            a.w * b.w;
    }

    static cross(a: Vector, b: Vector): Vector {
        return this.vector(
            a.y*b.z - a.z*b.y,
            a.z*b.x - a.x*b.z,
            a.x*b.y - a.y*b.x
        )
    }
}

export const Tuple = {
    create: TupleOperations.create.bind(TupleOperations),
    point: TupleOperations.point.bind(TupleOperations),
    vector: TupleOperations.vector.bind(TupleOperations),
    add: TupleOperations.add.bind(TupleOperations),
    subtract: TupleOperations.subtract.bind(TupleOperations),
    multiply: TupleOperations.multiply.bind(TupleOperations),
    divide: TupleOperations.divide.bind(TupleOperations),
    equals: TupleOperations.equals.bind(TupleOperations),
    negate: TupleOperations.negate.bind(TupleOperations),
    magnitude: TupleOperations.magnitude.bind(TupleOperations),
    normalize: TupleOperations.normalize.bind(TupleOperations),
    dot: TupleOperations.dot.bind(TupleOperations),
    cross: TupleOperations.cross.bind(TupleOperations),
}