import { CharIterator, checkIsChar } from "./char_iterator";
import IIterator from "./impl_iterator";
import NullIterator from "./null_iterator";
import NumberIterator from "./number_iterator";

export default function parsesAndIterator(start: string): IIterator {
    // Number
    if (parseInt(start).toString() === start) {
        return new NumberIterator(parseInt(start));
    }

    // Char
    if (checkIsChar(start)) {
        return new CharIterator(start);
    }

    return new NullIterator();
}
