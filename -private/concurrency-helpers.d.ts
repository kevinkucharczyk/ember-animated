import RSVP from 'rsvp';
export declare function registerCancellation(promise: Promise<any>, handler: (p: Promise<any>) => void): void;
export declare function fireCancellation(promise: Promise<any>): void;
export declare function rAF(): Promise<unknown>;
export declare let currentFrameClock: number;
export declare function microwait(): Promise<unknown>;
export declare function wait(ms?: number): RSVP.Promise<unknown>;
export declare function afterRender(): Promise<unknown>;
export declare let clock: {
    now(): number;
};
export declare function allSettled(promises: Promise<any>[]): Promise<any[]>;
