import IIterator from "./impl_iterator";

export default class NullIterator implements IIterator {
    next(): string {
        return "";
    }

}
