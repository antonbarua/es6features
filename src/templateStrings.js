export function init() {
  console.log('---template strings---');
}

export function templateStr(firstName, lastName) {
  return `Hi, ${firstName} ${lastName}
    How are you?`;
}
