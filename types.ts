export interface ITuple {
    x: number;
    y: number;
    z: number;
    w: number;
}

export interface IVector extends ITuple {}
export interface IPoint extends ITuple {}
export interface IColor extends ITuple {
    red: number;
    green: number;
    blue: number;
    alpha: number;
}
