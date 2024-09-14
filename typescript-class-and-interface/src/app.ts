class Department {
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}) : ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if(!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport({ text: value })
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0]; // 빈 배열이면 undefined가 들어감
  }

  addEmployee(name: string) {
    if(name==='Max') { return; }
    this.employees.push(name);
  }

  addReport({ text }: { text: string; }) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("1", ["Max"]);

it.addEmployee("Hyerim");

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport({ text: "Something went wrong..." });
console.log(accounting.mostRecentReport);

accounting.mostRecentReport = 'Something went wrong...';
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Matu');

accounting.printEmployees();

// accounting.printReports();
