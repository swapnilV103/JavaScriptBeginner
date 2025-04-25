
// sorting strings in java-script
let alpa = ['b','d','c','a']
let alpha = ["b","d","c","a"]

alpa.sort()
alpha.sort()

console.log(alpa)
alpa.reverse()
console.log(alpa)
console.log('alpha: '+alpha)

//if you try to give numbers to sort it will consider it as strings
let nums = [3,2,5,1]
console.log(nums.sort())

//failure scenario in numbers
var num = [12,19,4,25,3]
console.log(num.sort())

//after adding the logic, basically a bubble sort logic
console.log(num.sort((a,b)=>a-b)) //ascendnig order
console.log(num.sort((a,b)=>b-a)) //decending order