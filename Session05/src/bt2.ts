class Student {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }

    display(): void {
        console.log(`ID: ${this.id}, Age: ${this.age}, Email: ${this.email}`);
    }
}
let students: Student[] = [];
students.push(new Student(1, 2, "a@gmail.com"));
students.push(new Student(2, 3, "b@gmail.com"));
students.push(new Student(3, 4, "v@gmail.com"));
for (let student of students) {
    student.display();
}