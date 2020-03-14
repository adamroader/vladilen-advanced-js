let obj = {name: 'weakmap'}

// const arr = [obj]

// obj = null

// console.log(arr);



const map = new WeakMap([
    [obj, 'obj data']
])

// get, set, delete, has

obj = null


//=======================================

const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
         cache.set(user, Date.now)
    }
    return cache.get(user)
}

let joey = {name: 'Joey'}
let chandler = {name: 'Chandler'}
cacheUser(joey)
cacheUser(chandler)

joey = null

console.log(cache.has(joey))
console.log(cache.has(chandler))
