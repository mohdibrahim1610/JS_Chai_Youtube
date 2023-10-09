// #Array
const MyArray= [1,2,3,4,5,9]
// console.log(MyArray);

const StringArr = ["SuperMan", "Wounder Women"]
// console.log(StringArr);
// console.log(typeof StringArr);

// another way of declaring Arry
const anotherArry= new Array(2,4,73,22,1,9)
// console.log(anotherArry)


//// some menthods of array
anotherArry.push(25)  /// add value from end of the array Queue
// console.log(anotherArry);
anotherArry.pop() /// remove value from end of the array Queue
// console.log(anotherArry);

anotherArry.unshift(1)  // it is like push but from the other side of array
// console.log(anotherArry);
anotherArry.shift()   /// it is like pop but remove value from the other side of the array 
// console.log(anotherArry);

// console.log(typeof MyArray, MyArray);
const newArr = MyArray.join() // it will convert array into string
// console.log(typeof newArr, newArr);


///Slice and Splice
console.log(MyArray);
console.log("A Slice");
const MySlice=MyArray.slice(0,4)
console.log(MySlice);

console.log("B Splice");
const MySplice=MyArray.splice(2,4)  ///( it will skipe those index and start after from it, till where you want to print example end_point)
console.log(MySplice);



