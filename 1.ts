export interface Book {
  title:string;
  authors:string[];
  comment:string;
  isbn:string[];
  publisher:string;
  published:Date;
  tags:string[];
}

function searchBook<T extends keyof Book>(kw:string, fields:T[]) {
  return [] as Pick<Book, T>[];
}

const [book] = searchBook('node', ['authors', 'isbn']);
