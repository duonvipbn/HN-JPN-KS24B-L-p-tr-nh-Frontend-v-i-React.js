class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

let allStudents: Student[] = [];

class Classroom {
    students: Student[] = [];

    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Không có học sinh nào trong lớp.");
            return;
        }
        this.students.forEach(s => {
            console.log(`ID: ${s.getId()}, Tên: ${s.getName()}`);
        });
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): Student[] {
        return this.students.filter(s => s.getId() === id);
    }

    addStudentInClass(id: number): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const student = allStudents.splice(index, 1)[0];
            this.students.push(student);
        } else {
            console.log(`Không tìm thấy học sinh ID ${id} trong danh sách tất cả học sinh.`);
        }
    }
}

allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Bình"));
allStudents.push(new Student(3, "Châu"));
allStudents.push(new Student(4, "Dũng"));
allStudents.push(new Student(5, "Hà"));
allStudents.push(new Student(6, "Khanh"));

const classA = new Classroom();
const classB = new Classroom();

classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

console.log("Danh sách học sinh lớp A:");
classA.showStudents();

console.log("\nDanh sách học sinh lớp B:");
classB.showStudents();

console.log("\nDanh sách tất cả học sinh còn lại:");
console.log(allStudents.length === 0 ? "Không còn học sinh nào." : allStudents);