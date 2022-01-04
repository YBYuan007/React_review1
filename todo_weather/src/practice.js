// map
// -> the resulting array will be the smae length as the original array 
// -> takes 2 arguments, a callback (runs for each value in the array and return each new value in the resulting array) ) and an optional context 

      // var officers = [
      //   { id: 20, name: 'Captain Piett' },
      //   { id: 24, name: 'General Veers' },
      //   { id: 56, name: 'Admiral Ozzel' },
      //   { id: 88, name: 'Commander Jerjerrod' }
      // ];

      // let a = [];
      // officers.forEach(officer => a.push(officer.id));
      // console.log(a);

      // let b = [];
      // b = officers.map(officer=> officer.id);
      // console.log(b);

// reduece 
// -> similar to .map, .reduce runs a callback for each element of an array. 
// -> passes the result of this callback (the accummulator) from one array element to the other 

// const pilots = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14,
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30,
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16,
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 22,
//   }
// ];

// let a = null; 
// a=pilots.reduce((accumulator, pilot) =>  accumulator + pilot.years, 0);
// console.log(a)

// find which pilot is the most experienced one


// var mostExpPilot = pilots.reduce(function (oldest, pilot) {
//   return (oldest.years || 0) > pilot.years ? oldest : pilot;
// }, {});
// console.log(mostExpPilot);


// const b = pilots.reduce((oldest, pilot) => 
//   (oldest.years || 0) > pilot.years ? oldest : pilot
// ,{})
// console.log(b);

//.filter 
// -> you have an array, but only want some of element in it 
// var pilots = [
//   {
//     id: 2,
//     name: "Wedge Antilles",
//     faction: "Rebels",
//   },
//   {
//     id: 8,
//     name: "Ciena Ree",
//     faction: "Empire",
//   },
//   {
//     id: 40,
//     name: "Iden Versio",
//     faction: "Empire",
//   },
//   {
//     id: 66,
//     name: "Thane Kyrell",
//     faction: "Rebels",
//   }
// ];

// const rebels = pilots.filter(pilot=> pilot.faction ==="Rebels"); 
// console.log(rebels);

// combine .map, .filter, and .reducer 

// var personnel = [
//   {
//     id: 5,
//     name: "Luke Skywalker",
//     pilotingScore: 98,
//     shootingScore: 56,
//     isForceUser: true,
//   },
//   {
//     id: 82,
//     name: "Sabine Wren",
//     pilotingScore: 73,
//     shootingScore: 99,
//     isForceUser: false,
//   },
//   {
//     id: 22,
//     name: "Zeb Orellios",
//     pilotingScore: 20,
//     shootingScore: 59,
//     isForceUser: false,
//   },
//   {
//     id: 15,
//     name: "Ezra Bridger",
//     pilotingScore: 43,
//     shootingScore: 67,
//     isForceUser: true,
//   },
//   {
//     id: 11,
//     name: "Caleb Dume",
//     pilotingScore: 71,
//     shootingScore: 85,
//     isForceUser: true,
//   },
// ];


