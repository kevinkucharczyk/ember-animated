import { Color } from './color';
import './element-remove';
export declare class BoxShadow {
    static fromComputedStyle(string: string): BoxShadow[];
    static fromUserProvidedShadow(string: string): BoxShadow[];
    readonly color: Color;
    readonly x: number;
    readonly y: number;
    readonly blur: number;
    readonly spread: number;
    readonly inset: boolean;
    constructor({ color, x, y, blur, spread, inset, }: {
        color: Color;
        x: number;
        y: number;
        blur: number;
        spread: number;
        inset: boolean;
    });
    toString(): string;
}
export declare class BoxShadowTween {
    private shadowTweens;
    constructor(fromShadows: BoxShadow[], toShadows: BoxShadow[], duration: number, easing?: (time: number) => number);
    get currentValue(): BoxShadow[];
    get done(): boolean;
}
