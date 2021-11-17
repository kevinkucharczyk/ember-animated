import { easeInAndOut } from '../easings/cosine';
export default class Tween {
    readonly initialValue: number;
    readonly finalValue: number;
    private curve;
    private diff;
    constructor(initialValue: number, finalValue: number, duration: number, easing?: typeof easeInAndOut);
    get currentValue(): number;
    get done(): boolean;
    plus(otherTween: Tween | DerivedTween): DerivedTween;
}
export declare class DerivedTween {
    private combinator;
    private _finalValue;
    private inputs;
    constructor(inputs: (Tween | DerivedTween)[], combinator: (...inputs: (Tween | DerivedTween)[]) => number);
    get finalValue(): number;
    get currentValue(): number;
    get done(): boolean;
}
