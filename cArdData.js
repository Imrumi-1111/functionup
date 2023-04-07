const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

function findCard(value, suit) {
  

}

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/










/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * 
 * we have to loop through array
 * we have to maintain count in an object 
 * we need an empty object {}
 * First we will check if suit key name is present  if yes then will increase vlue by 1 else will add on key and put value 1
 * 
 * ans => {  heart:1,  club:3, diamond:2,}
*/


function getSuitCount() {
    const result = {}
    cardData.forEach( card => {
        const { suit } = card  
     
        if(result.hasOwnProperty(suit)){
            result[suit] = result[suit] + 1
        }else{
            result[suit] = 1
        }
    })

    return result
}

console.log(getSuitCount())