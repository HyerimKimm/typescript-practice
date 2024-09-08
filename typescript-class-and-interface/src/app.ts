class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe () {
        console.log('Department: '+ this.name);
    }
}

const webTeam = new Department('Web Team');

// webTeam.describe();

const accountingCopy = { describe: webTeam.describe };

accountingCopy.describe();