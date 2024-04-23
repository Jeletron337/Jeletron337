// let num1 = 4
// let num2 = 7 
// let sum = num1 + num2

// document.getElementById('demo').innerHTML = sum;

// let count = 0;
// function updCounter(){
//     document.getElementById("counter").innerHTML = "counter: " + count;

// }


// function increment(){
//     count = count + 1;
//     updCounter();
// }
// function decrement(){
//     count--;
//     updCounter();
// }
// function reset(){
//     count = 0;
//     updCounter()
// }
let count = 0 
function updCounter() {
    document.getElementById("counter").innerHTML = "counnter: " + count

}
function increment1() {
    count++
    updCounter()
}
function increment2() {
    count = count + 2
    updCounter()
}
function increment3(){
    count = count + 3
    updCounter()
}

function decrement1(){
    count--
    updCounter()
}
function decrement2(){
    count = count - 2
    updCounter()
}
function decrement3 () {
    count = count - 3
    updCounter()
}
function reset (){
    count = 0
    updCounter()
}



// let num = 10

// if (num < 9){
//     alert("YOUR NUMBER IS LESS THAN NINE")
// }else {
//     alert("UR NUMBER IS OVER NINE")
// }

/*
XS 10-13
S 14-17
M 18-21
L 22-25
XL 26-30
XXL 31-35




// */ 
// let size = prompt("enter ur size");

// if(size >= 10 && size <=13){
//     alert ("ur size is XS")
// }else if (size >=14 && size <= 17) {
//     alert("ur size is S")
// }else if (size >=18 && size <=21){
//     alert("ur size is M")
// }else if (size >=22 && size <= 25){
//     alert("ur size is L")
// }else if (size >=26 && size <= 30){
//     alert("ur size is XL")
// }else if (size >=31 && size <= 35){
//     alert("ur size is XXL")
// }else ("we dont know")

let size = 0;
function updSize(){
    size = document.getElementById("sizeNumber").value;
    console.log("size")
    document.getElementById
}
    
    
