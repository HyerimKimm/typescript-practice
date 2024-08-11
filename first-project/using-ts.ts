const person  = {
  name: 'Maximilian',
  age: 27,
  hobbies: ['Running', 'Fashion']
};

let favoriteActivites : string[];
favoriteActivites = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}