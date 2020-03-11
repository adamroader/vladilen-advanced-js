// function User(email, name) {
//     this.email = email;
//     this.name = name;
//     this.online = false;
// }

// User.prototype.login = function() {
//     this.online = true;
//     console.log(this.email, 'has logged in');   
// }

// User.prototype.logout = function() {
//     this.online = false;
//     console.log(this.email, 'has logged out');   
// }

// function Admin(...args) {
//     User.apply(this, args)
// }

// Admin.prototype = Object.create(User.prototype)

// Admin.prototype.deleteUser = function(user) {
//     users = users.filter(u => {
//         return u != user
//     })
// }

// var userOne = new User('joey@mail.com', 'Joey')
// var userTwo = new User('chandler@mail.com', 'Chandler')
// var admin = new Admin('ross@mail.com', 'Ross')
// var users = [userOne, userTwo, admin];

// ---------------vladilen. js Prostym yazykom. 1 Urok (prototype, inheritance, Object.create)---------------//









// ---------------vladilen. js Prostym yazykom. 2 Urok (this, bind, call, apply)---------------//

// function hello() {
//     console.log('hello', this); 
// }

// const person = {
//     name: 'Joey',
//     age: 30,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(window),
//     logInfo: function(job, hobby) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}, age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`hobby is ${hobby}`);
        
//         console.groupEnd()
        
//     }
// }

// const Monica = {
//     name: 'Monica',
//     age: 30

// }

// // person.logInfo.bind(Monica, 'chef', 'cleaning')()
// // person.logInfo.call(Monica, 'chef', 'cleaning')
// // person.logInfo.apply(Monica, ['chef', 'cleaning'])

// let array = [1, 2, 3, 4, 5]

// // function multi(arr, n) {
// //     return arr.map(i => {
// //         return i * n
// //     })
// // }

// // console.log(multi(array, 5));

// Array.prototype.multi = function(n) {
//      return this.map(i => {
//         return i * n
//     })
    
// }

// console.log(array.multi(5))


// ------------------vladilen. js Prostym yazykom. 3 Urok (closures)-----------------//



// function calcu(n) {
//     return function(m) {
//         console.log(1000 * n * m);
        
//     }
// }

// const calcul = calcu(5)
// calcul(2)


// function url(domain) {
//     return function(url) {
//         console.log(`www.${url}.${domain}`);
//     }
// }

// const urli = url('com')
// urli('google')





// person.logPerson.bind(person1)()

// function bind(obj, fn) {
//     return function(...args) {
//         fn.apply(obj, [args])
//     }
// }


// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);  
// }



// const person1 = {
// name: 'joey',
// age: 30,
// job: 'actor'
// }

// const person2 = {
// name: 'monica',
// age: 30,
// job: 'chef'
// }

// bind(person1, logPerson)()

// ------------------vladilen. js Prostym yazykom. 4 Urok (Asynchronous js)-----------------//

// let num = 1000;


// function test() {
//     num = num + 1000
//     return setTimeout(() => {
//         console.log(num)
//     }, num);
// }

// window.addEventListener('click', test)

// ------------------vladilen. js Prostym yazykom. 5 Urok (Promises)-----------------//

// console.log('Request Data...');


// setTimeout(() => {
//     console.log('Preparing Data...');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData);
        
//     }, 2000)
    
// }, 2000)

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         console.log('Preparing Data...');

//         resolve(backendData)

//     }, 2000)
// })

// p.then(backendData => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             backendData.modified = true
//             resolve(backendData)
//             // console.log('Data received', backendData);

       
//         }, 2000)       
//     })
    
// }).then(backendData => {
//     backendData.fromPromise = true
//     return backendData  
// }).then(backendData => {
//     console.log('modified', backendData);   
// })
// .catch(err => console.error('Error:', err))
// .finally(()=>console.log('finally'))

// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             return resolve()
//         }, ms)
//     })
// }

// sleep(2000).then(() => console.log('After 2 secs'))

// Promise.all([sleep(2000), sleep(5000)]).then(() => console.log('All promises'))
// Promise.race([sleep(2000), sleep(5000)]).then(() => console.log('Race promises'))

// ------------------vladilen. js Prostym yazykom. 6 Urok (Object.create, getters, setters)-----------------//

// const person = Object.create(
//     {
//         calculateAge() {
//             console.log(new Date().getFullYear() - this.birthdate);         
//         }
//     }, 
//     {
//         name: {
//             value: 'Joey',
//             enumerable: true,
//             writable: true,
//             configurable: true
//         },

//         birthdate: {
//             value: 1967,
//             enumerable: false,
//             writable: false,
//             configurable: false
//         },

//         age: {
//             get() {
//                 return new Date().getFullYear() - this.birthdate
//             },
//             set(value) {
//                 document.body.style.background = 'green'
//                 console.log('set age', value);
                
//             }
//         }
//     })

// // console.log(person);

// // delete person.name

// // console.log(person);

// // person.name = 'Chandler'

// // console.log(person.name);

// for(key in person) {

//     if(person.hasOwnProperty(key)) {
//         console.log("key", key, person[key]);
//     }  
// }



// ------------------vladilen. js Prostym yazykom. 7 Urok (super. extend, get set, static)-----------------//


// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

// class Animal {

//     static type = 'ANIMAL'

//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log(`I am ${this.name}` );
        
//     }

//     get ageInfo() {
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//        this.age = newAge
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal {

//     static type = 'CAT'

//     constructor(options) {
//         super(options)

//         this.color = options.color
//     }

//     voice() {
//         super.voice();
//         console.log('I am a cat');
        
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })


// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = 'none'
//     }

//     show() {
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Component{
//     constructor(options) {
//        super(options.selector)
//        this.$el.style.width = this.$el.style.height = options.size + "px"
//        this.$el.style.background = options.color
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100, 
//     color: 'red'
// })

// const box2 = new Box({
//     selector: '#box2',
//     size: 150, 
//     color: 'blue'
// })

// class Circle extends Box {
//     constructor(options) {
//         super(options)

//         this.$el.style.borderRadius = '50%'
//     }
// }

// const c = new Circle({
//     selector: '#circle',
//     size: 90, 
//     color: 'green'
// })


// ------------------vladilen. js Prostym yazykom. 8 Urok (async await)-----------------//

// ------------------vladilen. js Prostym yazykom. 9 Urok (Proxy)-----------------//
// ------------------vladilen. js Prostym yazykom. 10 Urok (Proxy. Practice)-----------------//
// ------------------vladilen. js Prostym yazykom. 11 Urok (Generators.yield, symbols, for of)-----------------//

// function* strGenerator() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = strGenerator()

// function* numberGen(n = 10) {
//     for(i = 0; i < n; i++) {
//         yield i
//     }
// }

// const num = numberGen(7);

// const iterator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0
//         return {
//             next() {
//                 if(i < n) {
//                     return {value: i++, done: false}
//                 }
//                 return {
//                     value: undefined, done: true
//                 }
//             }
//         }
//     }
// }

// const itr = iterator.gen();

// function* iter(n = 10) {
//     for(i = 0; i < n; i++) {
//         yield i
//     }
// }

// for(k of iter(5)) {
//     console.log(k)
    
// }