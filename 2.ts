import { Book } from './1';

function searchBook<T extends keyof Book>(kw:string, fields:T[]):Pick<Book, T>[];
function searchBook(kw:string):Pick<Book, 'title' | 'authors' | 'tags'>[];
function searchBook(kw, fields?) {
  return [];
}

const [book1] = searchBook('node');
const [book2] = searchBook('node', ['title']);
