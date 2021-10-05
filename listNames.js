
//Minha solução
function list(names) {
  var str = '';
  if(names)
  for(var i = 0; i < names.length - 1; i++){
    str = str.concat(names[i].name, ', ');
  }

  lastName = names.pop();
  str = str.slice(0, -2);
  str = str.concat(" & ", lastName.name);
  return str;
}

var nameList = [ { name: 'Bart' },
{ name: 'Lisa' },
{ name: 'Maggie' },
{ name: 'Homer' },
{ name: 'Marge' } ]

console.log(list(nameList));

//Solução mais usada
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }