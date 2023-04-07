const arrAy = ["abc","def","ghi","jkl"]
function find(alpha){
    let value;

    for(let index=0; index<arrAy.length; index++){
        ele=arrAy[index];
        if(alpha===ele){
            value = ele
        }else  {
            value!= ele
        }
        
}
return value
}
console.log(find("def"));


// write your own find and findIndex function
// (Hint: using for loop and if else)


// ======================================================== //





const practiceData = [[14,21,23,64], [33,46,51,65]]

function increased(arr){

    const increasedData = arr.map((array)=> {
       return array.map((element) => element+1) ;  
   }) ;
   
   return increasedData

}

console.log(increased(practiceData))
/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]] 

const result = [[14,21,23,64], [33,46,51,65]]
 * requirement two
 * from the above array, create an array of array of even numbers using a higher order method and for loop
 * solution = [[14,64], [46]]
 */



// ======================================================== //

    const array = [23 , 45,467, 789, 34, 989, 56]

    // problem => return an array such that numbers at odd idex are multiplied by 2
    // and numbers at even index are multiplied by 10

// ======================================================== //




 const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModel = ["city", "innova", "alto", "nano"]
 
const carObject = {}
carBrands.forEach((element, index) => {
    carObject[element] = carModel[index];
  });
  console.log(carObject)
//  using a higher order method, create a carObject variable such that 
/**
 * 
 * {
 * honda:city,
 * toyota:innova,
 * maruti:alto,
 * tata:nano
 * }
 */
 
 
// ======================================================== //


 /**
  *  Flattening
 Use the reduce method 
 to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 
 const arrays = [[1, 2, 3], [4, 5], [6]];
 // result =  [1, 2, 3, 4, 5, 6]
  * 
  * 
  */


// ======================================================== //


 /**
  * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  * return an array with all words converted into uppercase using higher order function
  * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
  * 
  * 
  * 
  */

// ======================================================== //

