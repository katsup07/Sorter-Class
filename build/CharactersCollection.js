"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    swap(leftIndex, rightIndex) {
        const chars = this.data.split('');
        [chars[leftIndex], chars[rightIndex]] = [chars[rightIndex], chars[leftIndex]];
        this.data = chars.join('');
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    get length() {
        return this.data.length;
    }
}
exports.CharactersCollection = CharactersCollection;
