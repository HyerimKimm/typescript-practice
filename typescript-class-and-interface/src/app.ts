// type AddFn = (a:number, b:number) => number;

interface AddFn {
  (a:number, b:number): number;
}

let add : AddFn;

add = (n1:number, n2:number) => {
  return n1+n2;
}

interface Named {
  readonly name?: string;
  outputName? : string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  constructor(n?: string) {
    if(n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name || ''}`);
  }
}

let user1, user2: Greetable;

user1 = new Person();
user2 = new Person('Hyerim');

user1.greet("Hi!");
user2.greet("Hi! ");