
interface Student {
    name: string;
    age: number;
    email: string;
}
function introduceStudent(student: Student): void {
    console.log(`ten: ${student.name}, toi ${student.age} tuoi va email la ${student.email}.`);
}
const student1: Student = {
    name: "a",
    age: 20,
    email: "a@example.com"
};
introduceStudent(student1);
