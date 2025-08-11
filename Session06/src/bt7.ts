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

    setName(name: string): void {
        this.name = name;
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
            if (student) { // kiểm tra trước khi push
                this.students.push(student);
            }
        }
    }

    removeStudent(id: number): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const student = this.students.splice(index, 1)[0];
            if (student) {
                allStudents.push(student);
            }
        }
    }

    editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
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

console.log("\nXóa học sinh ID 2 khỏi lớp A:");
classA.removeStudent(2);
classA.showStudents();

console.log("\nChỉnh sửa tên học sinh ID 3 trong lớp A:");
classA.editStudent(3, "Châu Updated");
classA.showStudents();

console.log("\nDanh sách tất cả học sinh còn lại:");
allStudents.forEach(s => console.log(`ID: ${s.getId()}, Tên: ${s.getName()}`));