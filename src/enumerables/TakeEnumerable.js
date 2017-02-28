import IEnumerable from './../IEnumerable';

import core from './../core/core';

class TakeEnumerable extends IEnumerable {
    constructor(source, count) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            let index = 0;
            for (let element of source) {
                if (index < count) {
                    yield element;
                } else {
                    return;
                }
                index++;
            }
        });
    };
};

export default TakeEnumerable;