import IIterator from "./impl_iterator";

const CHARS: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export class CharIterator implements IIterator {

    private _current: number;

    constructor(start: string) {
        for (let i = 0; i < CHARS.length; i++) {
            const element = CHARS[i];
            if (element === start) {
                this._current = i;
                return;
            }
        }
        this._current = 0;
    }

    next(): string {
        const res = CHARS[this._current];
        this._current += 1;
        if (this._current >= CHARS.length) {
            this._current = 0;
        }
        return res;
    }
}

export function checkIsChar(char: string): boolean {
    if (char.length !== 1) {
        return false;
    }
    return CHARS.includes(char);
}
