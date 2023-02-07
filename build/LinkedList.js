"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node_ {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(value) {
        if (!this.head) {
            this.head = new Node_(value);
            return;
        }
        let current = this.head;
        while (current.next)
            current = current.next;
        current.next = new Node_(value);
    }
    get length() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    at(index) {
        if (!this.head)
            throw "Index out of bounds.";
        let count = 0;
        let current = this.head;
        while (current.next && count < index) {
            count++;
            current = current.next;
        }
        return current;
    }
    compare(leftIndex, rightIndex) {
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        [this.at(leftIndex).data, this.at(rightIndex).data] = [this.at(rightIndex).data, this.at(leftIndex).data];
    }
    print() {
        if (!this.head)
            return console.log([]);
        const values = [];
        let current = this.head;
        while (current && current.next) {
            values.push(current);
            current = current.next;
        }
        // pushes the last Node on
        values.push(current);
        console.log(values);
    }
}
exports.LinkedList = LinkedList;
