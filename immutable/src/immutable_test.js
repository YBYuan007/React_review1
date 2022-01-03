// ----------------------- objects and arrays always pass by reference 

// // string 
// let fruit = 'banana'; 
// console.log('fruit:', fruit); 
// let fruitCopy = fruit; 
// console.log('fruitCopy:', fruitCopy); 

// fruit= 'apple'; 
// console.log('fruit:', fruit); 
// console.log('fruitCopy:', fruitCopy); // still banana 


// // object 
// let car = {make:'toyota', year: 2021, 'model': 'gp', color: 'blue'}
// console.log('car:', car); 
// let carCopy = car; 
// console.log('carCopy:', carCopy); 

// car.color= 'red'; 
// console.log('car:', car); 
// console.log('carCopy:', carCopy); // changed color as well

// // Array
// let list = [1,2,3]
// console.log('list:', list); 
// let listCopy = list; 
// console.log('listCopy:', listCopy); 

// list[2]= 100; 
// console.log('list:', list); 
// console.log('listCopy:', listCopy); // changed as well, pointing to the same location

//------------ spread operator / three dot notation 

// let car = {make:'toyota', year: 2021, 'model': 'gp', color: 'blue'}
// console.log('car:', car); 
// let carCopy = {...car}; 
// console.log('carCopy:', carCopy); 

// car.color= 'red'; 
// console.log('car:', car); 
// console.log('carCopy:', carCopy); // did not change color , pointing to different things 

// but it wont solve within
// let car = {make:'toyota', year: 2021, 'model': 'gp', color: 'blue', trims: ['plastic', 'gold'] }
// console.log('car:', car); 
// let carCopy = {...car}; 
// console.log('carCopy:', carCopy); 

// car.trims.push('leather'); 
// console.log('car:', car); 
// console.log('carCopy:', carCopy); // both changed

// let car = {make:'toyota', year: 2021, 'model': 'gp', color: 'blue', trims: ['plastic', 'gold'] }
// console.log('car:', car); 
// let carCopy = {...car, trims: [...car.trims]}; // copy array within the object as well.
// console.log('carCopy:', carCopy); 

// car.trims.push('leather'); 
// console.log('car:', car); 
// console.log('carCopy:', carCopy); // both changed