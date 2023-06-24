abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    // The work() function has to cycle trough the list of tasks and print the current one.
    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }

    public collectSalary(): void {
        console.log(`${this.name} recieved ${this.getSalary()} this month`);
    }

    public getSalary(): number {
        return this.salary;
    }
}

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.salary = 2000;
        this.tasks.push(" is working on a simple task");
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.salary = 6000;
        this.tasks.push(" is working on a complicated task.");
        this.tasks.push(" is taking time off work.");
        this.tasks.push(" is supervising junior workers.");
    }
}

export class Manager extends Employee {
    public divident: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.salary = 8000;
        this.divident = 3000;
        this.tasks.push(" scheduled a meeting.");
        this.tasks.push(" is preparing a quarterly report.");
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}

// Create employee instances
const juniorEmployee = new Junior("John Doe", 25);
const seniorEmployee = new Senior("Jane Smith", 30);
const managerEmployee = new Manager("Michael Johnson", 35);

// Perform work tasks
juniorEmployee.work();
seniorEmployee.work();
managerEmployee.work();

// Collect salaries
juniorEmployee.collectSalary();
seniorEmployee.collectSalary();
managerEmployee.collectSalary();
