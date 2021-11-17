export declare function spawn(genFn: () => Generator): Promise<any>;
export declare function spawnChild(genFn: () => Generator): Promise<any>;
export declare function stop(microRoutinePromise: Promise<any>): void;
export declare function logErrors(fn: (err: Error) => void): void;
export declare function current(): Promise<any> | undefined;
export declare function childrenSettled(): Promise<any[]>;
export declare function parallel(...functions: Function[]): (...args: any[]) => Promise<any[]>;
export declare function serial(...functions: Function[]): (...args: any[]) => Promise<any>;
