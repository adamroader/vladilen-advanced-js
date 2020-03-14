// const obj = {
//     name: 'Joey',
//     age: '30',
//     job: 'actor'
// }

// const entries = [
//     ['name', 'Joey'],
//     ['age', '30'],
//     ['job', 'actor']
// ]

// // console.log(Object.entries(obj));
// // console.log(Object.fromEntries(entries));

// const map = new Map(entries)

// map
// .set('newthing', '25')
// .set(obj, 'Value of object')
// .set(NaN, 'NaN??')

// console.log(map.get(NaN));

// map.delete('job')

// // console.log(map.has('job'));
// console.log(map.size);
// map.clear()
// console.log(map.size);

// console.log(map.entries());

// for(let [key, value] of map) {
//     console.log(key, value);
    
// }

// for(let val of map.values()) {
//     console.log(val);
// }

// console.log(map.values());

// for(let key of map.keys()) {
//     console.log(key);
// }

// console.log(map.keys());

// console.log(map);

// map.forEach((val, key, obj) => {
//     console.log(key, val);
    
// }) 

//=======================================================


// const array = [...map]

// const array = Array.from(map)
// console.log(array);

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj);

//========================================================

// const users = [
//     {name: 'Joey'},
//     {name: 'Chandler'},
//     {name: 'Ross'}
// ]

// const visits = new Map()

// visits
// .set(users[0], new Date())
// .set(users[1], new Date(new Date().getTime() + 1000 * 60))
// .set(users[2], new Date(new Date().getTime() + 5000 * 60))

// function lastVisit(user) {
//     return visits.get(user)
// }

// // console.log(lastVisit(users[0]));
// // console.log(lastVisit(users[1]));

// console.log(visits);

