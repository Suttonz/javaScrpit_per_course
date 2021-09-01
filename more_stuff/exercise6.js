let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches (inputs,search){
  let result = [];
  if(inputs){
    
    for(let i = 0; i < inputs.length; i++){

      if (search.test(inputs[i])){
           result.push(inputs[i]);
          }
      }
    }
    return result;
  }

  //second method 
  function allMatches(words, pattern) {
    return words.filter((word) => pattern.test(word));
  }
console.log(allMatches(words, /lab/));
