class Book {
    private id: number;
    private title: string;
    private author: string;
    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getInfo(): string {
        return `${this.id} - ${this.title} - ${this.author}`;
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
    searchBookByTitle(title: string): void {
        const foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(title.toLowerCase())
        );
        if (foundBooks.length > 0) {
            console.log(`Kết quả tìm kiếm cho "${title}":`);
            for (let book of foundBooks) {
                console.log(book.getInfo());
            }
        } else {
            console.log(`Không tìm thấy sách với tên "${title}"`);
        }
    }
}
const b1 = new Book(1, "a", "a");
const b2 = new Book(2, "b", "b");

const library = new Library();
library.addBook(b1);
library.addBook(b2);
library.searchBookByTitle("a");