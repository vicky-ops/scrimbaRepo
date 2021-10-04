//https://dmitripavlutin.com/javascript-array-reduce

//Sum up an array of number
const numbers=[7,2,4,1,10,6]

const sum=numbers.reduce(function(sum,number){
	const updatedSum=sum+number;
	return updatedSum
},0)

// console.log(sum)

//Finding a maximum value from an array
const maximumValue=numbers.reduce((max,num)=>{
	const maximum=max>num?max:num
	return maximum
},0)
// console.log(maximumvalue)

//Finding a minium value from an array
const miniumValue=numbers.reduce((min,num)=>{
	const minimum=min<num?min:num
	return minimum
})//Here initial value is omitted thus the initilized with the first item
console.log(miniumValue)