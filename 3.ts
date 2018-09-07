import { Book } from './1';

// const defaultFields = ['title', 'authors'];
function TupleArray <T extends string>(...args:T[]) {
  return args;
}

const defaultFields = TupleArray('title', 'authors', 'tags');

function searchBook<T extends keyof Book = (typeof defaultFields)[0]>(kw:string, fields?:T[]) {
  return [] as Pick<Book, T>[];
}

const [book1] = searchBook('node');
const [book2] = searchBook('node', ['title']);
