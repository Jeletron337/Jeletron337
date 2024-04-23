let fruits = ["apple",'orange', "grapes" ];
console.log(fruits[0])
fruits[1] = 'kiwi'


console.log(fruits[1])
console.log(fruits)

// var person = {
//    key: 'value',
//    tvalisFeri: 'yavisferi',
//    getAge: () => {
//     console.log("age")
//    }
// }
// console.log.



fruits.push('Bannana', 'mango',);
console.log(fruits)

console.log(fruits.pop())
console.log(fruits)


console.log(fruits.shift())
console.log(fruits)

fruits.unshift("apple")
console.log(fruits)

fruits.push("mango")
console.log(fruits)

fruits.splice(2,0, "pear", "cherry")
console.log(fruits)

var paraghraphToChange = document.getElementById("arrayId")
paraghraphToChange.innerHTML = fruits

console.log(fruits.toString())

var arr1 = [0,1,2,3]
var arr2 = [4,5,6,7]
var arr3 = [8,9,10,11]
var yvelaArray = arr1.concat(arr2,arr3)
console.log(yvelaArray)

var students = ["Greg", 'John', "Jimmy", "Nick"]
console.log.students
students.sort()
console.log(students)

students.reverse()
console.log(students)

console.log(students.length)

for(let i =0; i < fruits.length; i++){
    console.log(i)
    console.log(fruits[i])
}

fruits.forEach((fruits) => {
    console.log(fruits)
})
var loopArray = document.getElementById("loopArray")

for(let i = 0 ; i< fruits.length; i++){
    var li = document.createElement('li')
    li.innerHTML = fruits[i]
    loopArray.appendChild(li)
}
