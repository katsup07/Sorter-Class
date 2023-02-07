import { Sorter } from './Sorter';

class Node_{
  next: Node_ | null = null;
  constructor(public data: number){}
}

export class LinkedList extends Sorter {
  head: Node_ | null = null;

  add(value: number): void{
    if(!this.head){
      this.head = new Node_(value);
      return;
    }
    
    let current = this.head;
    while(current.next)
      current = current.next;
  
    current.next = new Node_(value);
  }

  get length(): number{
    let count = 0;
    let current = this.head;
    while(current){
      count++;
      current = current.next;
    }

    return count;
  }
  
  at(index: number): Node_{
    if(!this.head)
      throw "Index out of bounds."

    let count = 0;
    let current = this.head;
    while(current.next && count < index){
      count++;
      current = current.next;
    }

    return current;
  }

  compare(leftIndex: number, rightIndex: number): boolean{
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void{
    [this.at(leftIndex).data, this.at(rightIndex).data] = [this.at(rightIndex).data, this.at(leftIndex).data];
  }

  print(): void{
    if(!this.head)
      return console.log([]);

    const values: Node_[] = [];
    let current = this.head;
    while(current && current.next){
      values.push(current);
      current = current.next;
    }
    // pushes the last Node on
    values.push(current);
    console.log(values);
  }
}