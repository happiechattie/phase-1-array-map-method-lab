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

const capitalize = function(word){
  const wordString = Array.from(word);
  const newWord = [...wordString];
  newWord[0] = newWord[0].toUpperCase();
  let newWordString = "";
  for (let i = 0; i < newWord.length; i++){
    newWordString += newWord[i];
  }
  return newWordString;
}

const makeTitleCase = function (element){
  const tElementString= element.split(" ");
  let titleCasedStringArray = [...tElementString];
  let titleCasedString = "";
  titleCasedStringArray = tElementString.map(word => capitalize(word));
  for (let i = 0; i < titleCasedStringArray.length; i++){
    titleCasedString += titleCasedStringArray[i] + " ";
  }
  const noSpaceString = titleCasedString.slice(0, titleCasedString.length - 1);
  return noSpaceString;
}

const titleCased = () => {
  return tutorials.map(string => makeTitleCase(string));
}