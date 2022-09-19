function createCounter (){
    let counter = 0
    function increase(){
        return ++ counter
    }
    return increase
}

const counter1 = createCounter()

console.log(counter1())
console.log(counter1())

console.log(counter1())

// Viet ngan code khi in log
function createLogger(namespace) {
    function logger(message){
        console.log(`[${namespace}] ${message}`)
    }
    return logger
}

const infoLogger = createLogger('Info')

infoLogger('bat dau gui mail')


// function createStorage(key) {
//     const store = JSON.parse(localStorage.getItem(key)) ?? {}

//     const save = () => {
//         localStorage.setItem(key, JSON.stringify(store));
//     }

//     const storage = {
//         get(key) {
//             return store[key]
//         },
//         set(key, value) {
//             store[key] = value
//             save()
//         },
//         remove(key) {
//             delete store[key]
//             save()
//         }
//     }

//     return storage
// }

// const ProfileSetting = createStorage('profile_setting')
// ProfileSetting.set('fullname','D')
// console.log(ProfileSetting.get('fullname'))

function a(x) {
    x++;
    return function () {
        console.log(++x);
    };
}

a(1)();
a(1)();
a(1)();

let x = a(1);
x();
x();
x();
// Output: ?
