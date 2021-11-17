/// <reference types="rsvp" />
export declare function task(taskFn: (...args: any[]) => Generator): ((proto: object, key: string) => any) & TaskProperty;
declare let BaseTaskProperty: {
    new (): object;
};
declare type BufferPolicy = (task: Task, priv: TaskPrivate) => Promise<void> | void;
export declare class TaskProperty extends BaseTaskProperty {
    _bufferPolicy: BufferPolicy | undefined;
    private _observes;
    restartable(): this;
    drop(): this;
    observes(...deps: string[]): this;
    setup(proto: object, taskName: string): void;
}
interface TaskPrivate {
    context: object;
    implementation: (...args: unknown[]) => Generator;
    instances: Promise<void>[];
    taskProperty: TaskProperty;
    name: string;
}
export declare class Task {
    concurrency: number;
    isRunning: boolean;
    constructor(context: object, implementation: TaskPrivate['implementation'], taskProperty: TaskProperty, name: string);
    perform(...args: unknown[]): Promise<any>;
    cancelAll(): void;
    _addInstance(i: Promise<void>): void;
    _removeInstance(i: Promise<void>): void;
    _safePerform(): void;
}
export declare function timeout(ms: number): import("rsvp").default.Promise<unknown>;
export {};
