const Marvel_Heros=['IronMan', 'spider',"Thor"]
const DC_Heros=["SuperMan", 'BatMan', "Flash"]
// console.log(Marvel_Heros);
// console.log(DC_Heros);
//Marvel_Heros.push(DC_Heros) // # Push is not a good way or method to add 2 Array
// console.log(Marvel_Heros)

//# Concat  operation for adding 2 array
// const addArray=Marvel_Heros.concat(DC_Heros) ///#1 way to add 2 array but we can't add more then 2 array with this
// console.log(addArray);

///spread Operator
const Speread= [...Marvel_Heros,...DC_Heros] ///#2 by usinf spread operator we can add multiple Array
// console.log(Speread);


// taking out array from arrays
const Another_Array=[3,2,[1,2],5,[5,7,8,9],3,[9,5,[1,2,35,2]]]
console.log(Another_Array); 
const real_another_array=Another_Array.flat(Infinity)
console.log(real_another_array);

real_another_array.shift()
console.log(real_another_array);