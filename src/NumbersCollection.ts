import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]){
    super();
  }

  swap(leftIndex: number, rightIndex: number): void{
    [this.data[leftIndex], this.data[rightIndex]] = [this.data[rightIndex], this.data[leftIndex]];
  }


  compare(leftIndex: number, rightIndex: number): boolean{
    return this.data[leftIndex] > this.data[rightIndex];
  }
  // Call length like an accessor --> instance_name.length
  get length(): number{
    return this.data.length;
  }

}