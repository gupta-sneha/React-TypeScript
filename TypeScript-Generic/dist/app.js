class StringList {
    constructor() {
        this.list = [];
    }
    insertToList(item) {
        this.list.push(item);
    }
    getItems() {
        return this.list;
    }
}
class GenericListSample1 {
    constructor() {
        this.list = [];
    }
    insertToList(item) {
        this.list.push(item);
    }
    getItems() {
        return this.list;
    }
}
const strList1 = new GenericListSample1();
strList1.insertToList('Hello');
const numList1 = new GenericListSample1();
numList1.insertToList(1);
class GenericListSample2 {
    constructor() {
        this.list = [];
    }
    insertToList(item, another) {
        this.list.push(item);
    }
    getItems() {
        return this.list;
    }
}
const strList2 = new GenericListSample2();
strList2.insertToList('Hello', 1);
const numList2 = new GenericListSample2();
numList2.insertToList(1, 'Hello');
