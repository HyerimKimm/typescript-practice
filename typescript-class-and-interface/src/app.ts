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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if(name==='Max') { return; }
    this.employees.push(name);
  }

  addRepart(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("1", ["Max"]);

it.addEmployee("Hyerim");

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addRepart("Something went wrong...");

accounting.addEmployee('Max');
accounting.addEmployee('Matu');

accounting.printEmployees();

// accounting.printReports();
