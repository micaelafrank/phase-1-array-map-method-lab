const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map( (item) => {
  return item.split(' ').map( word => word[0].toUpperCase() + word.slice(1)).join(' ')
})
}

// const titleCased = () => {
//   return tutorials.map( item => {
//     return item.split(' ').map( word => word[0].toUpperCase() + word.slice(1)).join(' ');
//   })
// }

console.log(titleCased);

//for the array Tutorials, we are taking every element (each title), and
//splitting them into individual arrays. 
//Then, for each array, WORD, we are capitalizing the first letter
//of every word, and then using the .join() method, to turn them
//back into strings



// tutorials.map( (item) => {
//   item.split(' ');
//   const letterCaps = usingSplit.charAt(0).toUpperCase();
//   const letterSmall = usingSplit.substring(1).toLowerCase();
//   const newWord = letterCaps + letterSmall;)}

//   const newAssign = Object.assign([], usingSplit, item.charAt(0).toUpperCase(), item.substring(1).toLowerCase());
//   console.log(newAssign);})
//     return capitalize(newLine);


// const titleCased = tutorials.map( (title) => {

//   return tutorials
// });
// let newWord; 

// const titleCase = tutorials.map( (item) => {
//   const newArr = item.split(' ');
//   for(element of newArr){
//     newWord = item.charAt[0].toUpperCase() + item.slice(1).toLowerCase();
//   }
//   return newWord.join(" ")
// });


// function capitalize(newLine){
// let letterCaps;
// let letterSmall;
// let newWord;
//   for(let item of tutorials){
//     const line = tutorials.item.split(' ');
//     letterCaps = usingSplit.charAt(0).toUpperCase();
//     letterSmall = usingSplit.substring(1).toLowerCase();
//     newWord = letterCaps + letterSmall;
//   }
//     let newLines = newWord.join(" ")
//   console.log(newWord);
//   return newWord;
// }

// //const capitalWord = eachValue.map( (" ")) => {
// //   const letterCaps = item.charAt(0).toUpperCase();
// //   const letterSmall = item.substring(1).toLowerCase();
// //   console.log(letterCaps + letterSmall);
// //   console.log(capitalWord);
// //   return capitalWord;
// // });