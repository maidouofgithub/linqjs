'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const Enumerable = require('./../Enumerable');

const defaultSelector = require('./../methods/defaultSelector');
const defaultResultSelector = require('./../methods/defaultResultSelector');
const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const equalityPredicate = require('./../methods/equalityPredicate');

const IGrouping = require('./IGrouping');

class NearGroupedEnumerable extends IEnumerable {
    constructor(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
        super(source);
        keySelector = methods.asSelector(keySelector);
        elementSelector = methods.asSelector(elementSelector);
        resultSelector = methods.asSelector(resultSelector);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* NearGroupedIterator() {
            let groupings = [];
            let array = [];

            let noneKey = Symbol('noneKey');
            let prevKey = noneKey;

            let it = source[Symbol.iterator]();
            let hasNext = () => {
                let next = it.next();
                if (!next.done) {
                    let key = keySelector(next.value);
                    let element = elementSelector(next.value);
                    if (prevKey === noneKey || !comparer(key, prevKey)) {
                        array = [];
                        prevKey = key;
                        groupings.push(new IGrouping(key, (array => function* () {
                            let index = 0;
                            while (array.length > index || hasNext()) {
                                if (array.length > index) {
                                    yield array[index++];
                                }
                            }
                        })(array)));
                    }
                    array.push(element);
                }
                return !next.done;
            };
            let gi = 0;
            while (groupings.length > gi || hasNext()) {
                if (groupings.length > gi) {
                    let grouping = groupings[gi++];
                    yield resultSelector(grouping.key, grouping);
                }
            }
        });
    }
}

module.exports = NearGroupedEnumerable;