'use strict';

const ITree = require('./ITree');

const core = require('./../core/core');

const Enumerable = require('./../Enumerable');

const DEFAULT_LEFT = Symbol('left');
const DEFAULT_RIGHT = Symbol('right');

class BinaryTree extends ITree {
    constructor(key, parent, value, iterator) {
        super(key, parent, value, iterator);
        let left = DEFAULT_LEFT, right = DEFAULT_RIGHT;
        core.defineProperty(this, 'left', () => left === DEFAULT_LEFT ? left = Enumerable.elementAtOrDefault(this, 0) : left, true, true);
        core.defineProperty(this, 'right', () => right === DEFAULT_RIGHT ? right = Enumerable.elementAtOrDefault(this, 1) : right, true, true);
    }
    hasLeft() {
        return !core.isUndefined(this.left);
    }
    hasRight() {
        return !core.isUndefined(this.right);
    }
    /**
     * 前序遍历
     **/
    preOrder() {
        let tree = this;
        return new IteratorEnumerable(function* () {
            yield tree.value;
            if (tree.hasLeft()) {
                yield* tree.left.preOrder();
            }
            if (tree.hasRight()) {
                yield* tree.right.preOrder();
            }
        });
    }

    /**
     * 中序遍历
     */
    inOrder() {
        let tree = this;
        return new IteratorEnumerable(function* () {
            if (tree.hasLeft()) {
                yield* tree.left.inOrder();
            }
            yield tree.value;
            if (tree.hasRight()) {
                yield* tree.right.inOrder();
            }
        });
    }
    /**
     * 后序遍历
     */
    postOrder() {
        let tree = this;
        return new IteratorEnumerable(function* () {
            if (tree.hasLeft()) {
                yield* tree.left.postOrder();
            }
            if (tree.hasRight()) {
                yield* tree.right.postOrder();
            }
            yield this.value;
        });
    }
    get isBinary() {
        return true;
    }
    asBinary() {
        return this;
    }
}

module.exports = BinaryTree;