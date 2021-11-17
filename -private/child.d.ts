export default class Child {
    readonly group: string;
    readonly id: string;
    readonly value: unknown;
    readonly index: number;
    state: 'new' | 'kept' | 'removing';
    private removalBlockers;
    private removalCycle;
    constructor(group: string, id: string, value: unknown, index: number);
    block(cycle: number): void;
    unblock(cycle: number): void;
    flagForRemoval(): void;
    get shouldRemove(): boolean;
    clone(): Child;
}
