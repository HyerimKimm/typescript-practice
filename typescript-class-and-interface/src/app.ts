class Department {
  //   private id: string;
  //   private name: string;
  private employees: string[] = [];

  constructor(private id: string, private name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe() {
    console.log(`Department (${this.id}) : ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const webTeam = new Department("1", "Web Team");

webTeam.addEmployee("Hyerim");

webTeam.describe();
