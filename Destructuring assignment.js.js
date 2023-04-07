const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// IMPORTANT: solve all problems using using destructuring and rest syntax

		
// ============================================================================= //
//1.
places.shift()
console.log(places);
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']


// ============================================================================= //
//2.
const placesToVisit =places.slice(0)
console.log(placesToVisit)
console.log(placesToVisit.concat(",",morePlaces));
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

// ============================================================================= //
// 3.
morePlaces.shift()
places.pop();
console.log(places);
console.log(morePlaces);
const wantToVisit =morePlaces.concat(places);
console.log(wantToVisit);
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]



const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  
// 4.
// destructure and store pincode into a variable named myPincode
console.log(myData.address.pinCode)
delete myData.address.pinCode
myData.address.myPincode=123455;
console.log(myData.address)

  
// 5.
// destructure and store second like into a vaiable named myLike
console.log(myData.likes);
delete myData.likes
myData.myLike=["music", "movies"];
console.log(myData.myLike);