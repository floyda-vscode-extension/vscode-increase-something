import IIterator from "./impl_iterator";

export default class NumberIterator implements IIterator {

    constructor(private _initial: number) { }

    next(): string {
        const current = this._initial;
        this._initial = this._initial + 1;
        return current.toString();
    }

}
