var a = [10,20,4,40,60,70]
var b = [1,2,3,4,5,6,7,8,9,10]
var newArr = a.concat(b);
//newArr=newArr
var unique = newArr.filter((number, key) => newArr.indexOf(number)===key); 
unique.sort((a,b)=> a-b); // sort in ascending
document.write(unique);