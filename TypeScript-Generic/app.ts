class StringList {
    private list: Array<string> = [];

    insertToList(item: string): void {
        this.list.push(item);
    }

    getItems(): Array<string> {
        return this.list;
    }
}

class GenericListSample1<T>{
    private list: Array<T> = [];

    insertToList(item: T): void {
        this.list.push(item);
    }

    getItems(): Array<T> {
        return this.list;
    }
}

const strList1: GenericListSample1<string> = new GenericListSample1<string>();
strList1.insertToList('Hello');

const numList1: GenericListSample1<number> = new GenericListSample1<number>();
numList1.insertToList(1);

class GenericListSample2<T, X>{
    private list: Array<T> = [];

    insertToList(item: T, another: X): void {
        this.list.push(item);
    }

    getItems(): Array<T> {
        return this.list;
    }
}

const strList2: GenericListSample2<string, number> = new GenericListSample2<string, number>();
strList2.insertToList('Hello', 1);

const numList2: GenericListSample2<number, string> = new GenericListSample2<number, string>();
numList2.insertToList(1, 'Hello');
