class Book {
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
    getInfo(): string {
        return `${this.title} - ${this.author}`;
    }
}
class Library {
    private books: Book[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }
    showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        for (let book of this.books) {
            console.log(book.getInfo());
        }
    }
}
const b1 = new Book("a", "a");
const b2 = new Book("b", "b");
const library = new Library();
library.addBook(b1);
library.addBook(b2);
library.showBooks();