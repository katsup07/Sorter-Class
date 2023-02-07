import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// === Tests ===

// const numbersCollection = new NumbersCollection([10, 2,3,-1, 0]);
// numbersCollection.sort();
// console.log('Sorted numbers: ', numbersCollection.data);

// const charactersCollection = new CharactersCollection('yzwYxvrtXcdlZja');
// charactersCollection.sort();
// console.log('Sorted characters: ', charactersCollection.data);

const ll = new LinkedList();
ll.add(10);
ll.add(-2);
ll.add(1000);
ll.add(3);
ll.add(-33);
ll.add(94);
ll.print();
ll.sort();
ll.print();

