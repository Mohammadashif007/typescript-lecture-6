//! dynamically typed

let age: any;

age = 45;
age= true;
age = '88'

age = {name: 'john', age: 88}

console.log(age);


let mixed: any[] = [];

mixed.push('tom');
mixed.push(44);
mixed.push(false)

console.log(mixed);

let ninjas: {name: any, age: any};

ninjas= {
    name: 'john', 
    age: 44
}

ninjas = {
    name: 88, 
    age: 'john'
}

console.log(ninjas);
