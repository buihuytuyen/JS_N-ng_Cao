// pham vi la private

(()=>{
    console.log(2 ** 3);
})(); 

// Phai dung dau ; truoc IIFE
(function tuyen (message){
    console.log("Message: ", message);
})('tuyen');

const app = (function(){
    // Private
    const cars = []

    return {
        add(car){
            cars.push(car);
        },
        edit(index, car){
            cars[index] = car;
        },
        delete(index){
            cars.splice(index, 1);
        }
    }

})()