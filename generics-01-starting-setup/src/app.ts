// const names: Array<string> = ["Max", "Manuel"]; // string[] 과 완전히 같은 타입이다.

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 20 });
console.log(mergedObj.name);

interface Lengthy {
  length : number;
}
 
function countAndDesc<T extends Lengthy>(element: T): [T, string] {
  let descText = 'Got no value';

  if(element.length>1) {
    descText = 'Got '+element.length+'elements.';
  }  else if(element.length===1) {
    descText = 'Got 1 element.'
    } else {
      descText = 'Got no value.'
    }

  return [ element, descText ];
}

console.log(countAndDesc('Hi'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractAndConvert( {name: '혜림이'}, 'name');