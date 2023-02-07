import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
  constructor(public data: string){
    super();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split('');
    [chars[leftIndex], chars[rightIndex]] = [chars[rightIndex], chars[leftIndex]];
    this.data = chars.join('');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase()> this.data[rightIndex].toLowerCase();
  }

  get length(): number{
    return this.data.length;
  }
}
