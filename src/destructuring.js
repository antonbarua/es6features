export function init() {
  console.log('---destructuring---');
}

const arr = [1, 2, 3, 4, 5];

function extractFirstSecond([first, second]) {
  console.log(first);
  console.log(second);
}

function extractSecondFourth([, second, , fourth]) {
  console.log(second);
  console.log(fourth);
}

export function destructureArray() {
  console.log(arr);
  console.log('first and second');
  extractFirstSecond(arr);
  console.log('second and fourth');
  extractSecondFourth(arr);
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 33,
  children: 0,
  profession: 'dev',
};

function printBasic({ firstName, lastName, age }) {
  console.log(`${firstName} ${lastName}'s age is: ${age}`);
}

function printProfession(personObj) {
  const { profession } = personObj;
  console.log(profession);
}

export function destructureObject() {
  printBasic(person);
  printProfession(person);
}

export function simpleDestructuring() {
  const [one, two] = [1, 2, 3, 4];
  console.log(one);
  console.log(two);

  const [, , three, four] = [1, 2, 3, 4];
  console.log(three);
  console.log(four);

  const obj = {
    a: 1, b: 2, c: 3, d: 4,
  };

  const { a, b, d } = obj;
  console.log(a);
  console.log(b);
  console.log(d);

  const { f, e } = { e: 5, f: 6 };
  console.log(e);
  console.log(f);
}
