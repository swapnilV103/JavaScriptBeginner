//if you know the size of the array
let subjectNumber =Array(6);

let marksInEachSubject = new Array(40,37,32,44,39,45)

//more simpler way to declare an array

var marks = [40,44,32,36,47,41] 
console.log(marks)

console.log(marks[2])

marks[3]= 39;
console.log(marks[3])
console.log(marks)

//gives the length or size of the array
console.log("Above array's length: "+marks.length)

//to add an element at the end
marks.push(30)

//to pop/delete an element at the end
marks.pop()

//IMPORTANT: To add an element at the begining of the array
marks.unshift(25)

console.log(marks)


//sum of all elements of array

var sum=0;
var arr1 = [1,2,3,4,5]

for(var i=0;i<=arr1.length-1;i++){
    sum +=arr1[i];
}

console.log("Sum of array: "+sum)


//print even numbers of the array
var scores = [10,11,12,13,14,15]
var evenArray=[]
for(var i=0;i<=scores.length-1;i++){
    if(scores[i]%2==0){
        evenArray.push(scores[i])
    }
}
console.log(evenArray)


//-----IMPORTANT METHODS: REDUCE, FILTER, MAP IN ARRAY ---------//

console.log(arr1.reduce((sum,eachElement)=> sum+eachElement,0))

    //even array using filter method//
let newFilteredArray = scores.filter(score=>score%2==0);
console.log(newFilteredArray)

// working on the array received after filtering
let newMappedarray = newFilteredArray.map(a=>a*3)
console.log(newMappedarray)

//sum the mapped array - use the reduce method
let lastReducedArray = newMappedarray.reduce((sum1,element1)=>sum1+element1,0)
console.log(lastReducedArray)


//there is a better way of doing this using chaining
var scores1 = [1,2,3,4]
console.log(scores1.filter(score=>score%2==0).map(score=>score*2).reduce((score,eachElement)=>score+eachElement,0))
 //scores1.filter(score=>score%2==0).map(score=>score*2).reduce((score,eachElement)=>score+eachElement,0)

 //scores.reduce((sum,eachElement=> sum + eachElement,0))
