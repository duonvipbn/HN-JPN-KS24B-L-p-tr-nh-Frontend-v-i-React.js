class Book {
    constructor(
        private id: number,
        private title: string,
        private author: string,
        private stock: number,
        private status: string
    ) { }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getStock(): number {
        return this.stock;
    }

    getStatus(): string {
        return this.status;
    }
}

class Member {
    lendedBooks: LendedBook[] = [];
    constructor(
        private id: number,
        private name: string,
        private contact: string,
        private status: string
    ) { }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

class LendedBook {
    constructor(
        private memberId: number,
        private bookId: number,
        private dueDate: Date
    ) { }

    getMemberId(): number {
        return this.memberId;
    }

    getBookId(): number {
        return this.bookId;
    }

    getDueDate(): Date {
        return this.dueDate;
    }
}

class Library {
    books: Book[] = [];
    members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Không có sách trong thư viện.");
            return;
        }
        this.books.forEach(b => {
            console.log(`ID: ${b.getId()}, Tiêu đề: ${b.getTitle()}, Tác giả: ${b.getAuthor()}, Số lượng: ${b.getStock()}, Tình trạng: ${b.getStatus()}`);
        });
    }
}

const library = new Library();

const book1 = new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 5, "Có sẵn");
const book2 = new Book(2, "Học OOP qua ví dụ", "Trần Thị B", 3, "Có sẵn");
const book3 = new Book(3, "Thuật toán nâng cao", "Lê Văn C", 2, "Có sẵn");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.showBooks();