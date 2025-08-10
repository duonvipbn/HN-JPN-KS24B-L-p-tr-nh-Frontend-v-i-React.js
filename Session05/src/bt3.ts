class Employee {
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
    }
}
const emp = new Employee("A Nguyen", "a", "098765432");
emp.printInfo();