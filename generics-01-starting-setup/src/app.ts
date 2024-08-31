// const names: Array<string> = ["Max", "Manuel"]; // string[] 과 완전히 같은 타입이다.

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Max" }, { age: "20" }));
