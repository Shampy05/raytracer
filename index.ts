import { EPSILON } from "./constants";
import { ITuple, IVector, IPoint, IColor } from "./types";

class TupleOperations {
    static create(x: number, y: number, z: number, w: number): ITuple {
        return {x, y, z, w};
    }

    static point(x: number, y: number, z: number): IPoint {
        return this.create(x, y, z, 1) as IPoint;
    }

    static vector(x: number, y: number, z: number): IVector {
        return this.create(x, y, z, 0) as IVector;
    }

    static color(red: number, green: number, blue: number, alpha: number): IColor {
        const color = this.create(red, green, blue, alpha);
        return {
            ...color,
            get red() { return this.x },
            get green() { return this.y },
            get blue() { return this.z },
            get alpha() { return this.w },
            set red(value: number) { this.x = value },
            set green(value: number) { this.y = value },
            set blue(value: number) { this.z = value },
            set alpha(value: number) { this.w = value },
        }
    }

    static equals(a: ITuple, b: ITuple): boolean {
        return Math.abs(a.x - b.x) < EPSILON &&
            Math.abs(a.y - b.y) < EPSILON &&
            Math.abs(a.z - b.z) < EPSILON &&
            Math.abs(a.w - b.w) < EPSILON;
    }

    static add(a: ITuple, b: ITuple): ITuple {
        return this.create(
            a.x + b.x,
            a.y + b.y,
            a.z + b.z,
            a.w + b.w,
        );
    }

    static subtract(a: ITuple, b: ITuple): ITuple {
        return this.create(
            a.x - b.x,
            a.y - b.y,
            a.z - b.z,
            a.w - b.w,
        );
    }

    static negate(a: ITuple): ITuple {
        return this.create(-a.x, -a.y, -a.z, -a.w)
    }

    static multiply<T extends ITuple | number>(a: ITuple, b: T): ITuple {
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

    static divide(a: ITuple, scalar: number): ITuple {
        return this.multiply(a, 1 / scalar)
    }

    static magnitude(a: ITuple): number {
        return Math.hypot(a.x, a.y, a.z, a.w)
    }

    static normalize(a: ITuple): ITuple {
        const mag = this.magnitude(a)
        return this.divide(a, mag)
    }

    static dot(a: ITuple, b: ITuple): number {
        return a.x * b.x +
            a.y * b.y +
            a.z * b.z +
            a.w * b.w;
    }

    static cross(a: IVector, b: IVector): IVector {
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
    color: TupleOperations.color.bind(TupleOperations),
}