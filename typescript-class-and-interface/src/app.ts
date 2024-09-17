abstract class Department {
  static fiscalYear = 2024;
  //   private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees(this: Department) {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(this: ITDepartment): void {}
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport({ text: value });
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0]; // 빈 배열이면 undefined가 들어감
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport({ text }: { text: string }) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe(this: AccountingDepartment) {
    console.log("Accounting Department ID :" + this.id);
  }
}

const it = new ITDepartment("1", ["Max"]);

it.addEmployee("Hyerim");

console.log(it);

const employee1 = Department.createEmployee("Max");
console.log(employee1); // { name: 'Max' }

const accounting = new AccountingDepartment("d2", []);

accounting.addReport({ text: "Something went wrong..." });
console.log(accounting.mostRecentReport);
console.log(Department.fiscalYear);

accounting.mostRecentReport = "Something went wrong...";
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Matu");

// accounting.printEmployees();
accounting.describe();
// accounting.printReports();
