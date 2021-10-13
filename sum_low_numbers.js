const n = [19, 5, 42, 2, 77];

//Minha Solução
function sumTwoSmallestNumbers(numbers){  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if(numbers[i] < numbers[j]){
        temp = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = temp;
      }
    }
  }
  return numbers[0] + numbers[1];
};

console.log(sumTwoSmallestNumbers(n));

//Já conhecia a função sort, mas como ainda não compreendia muito bem, por isso não foi utilizada


//Solução mais utilizada

function sumTwoSmallestNumbers(numbers){ 
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};