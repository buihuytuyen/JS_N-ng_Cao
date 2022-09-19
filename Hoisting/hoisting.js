// var
console.log(age)
console.log(fullname)
var age = 18 // hoisting len tren vao nhan gia tri undefined

// let, const
{ 
    console.log(name) // error
    let name = 'tuyen' // hoisting len tren va khong nhan gia tri
}

{
    let fullname = 'Nguyen Van A'

    {
        console.log(fullname) // error

        let fullname = 'Nguyen Van B'
    }
}


const  counter1 = makeCounter()

console.log(counter1())

function makeCounter() {
    let counter = 0;
    return increate

    function increment() {
        return
    }
}