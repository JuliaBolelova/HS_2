const obj1 = {id: 1, name: 'userName'};
const obj2 = {id: 1, password: 'qwerty'};

const newObj = Object.assign(obj1, obj2);

console.log(newObj);
