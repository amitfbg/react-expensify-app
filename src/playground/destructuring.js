//
//Object Destructuring
//

// const person={
//     name:'Amit',
//     age:'23',
//     location:{
//         city:'abc',
//         temp:92
//     }
// };

//before destructuring
//  nst age=person.age;
//after destructuring
//const {name, age}=person;
//in destructuring we can set default
//we can also change the variable name to other
//here temp is changing to temperature
//const {city,temp:temperature} = person.location;


//console.log(`${name} is ${age}`);

// const book={
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         //name:'Penguin'
//     }
// };
//variable name change and default values tooo
// const{name:publisherName='Self'}=book.publisher;

// console.log(publisherName);

//----------------------------------------------------------

//
//Array Destructuring
//

//const address=['1299 A','B','C','191'];

//if you want to skip some values from array just put comma(,)
//below both will work
//const [street, city, state, zip]=address;
//const [, city, state, ]=address;
//console.log(`you are in ${city} ${state}`);

const item=['Coffee(hot)',2,3,5];

const [coffee,,mprice]=item;

console.log(`A medium ${coffee} cost ${mprice}`);