//Minha Solução

String.prototype.ToJadenCase = function () {
  var arr = this.split(' ');
  var final = '';

  arr.forEach((word, index)=> {
    var first = word.substr(0, 1);
    first = first.toUpperCase();

    word = `${first}${word.slice(1)}`
    final = final.concat(word, ' ');
    final.slice()
  });
  
  return final.slice(0, -1);
}

str = "How can mirrors be real if our eyes aren't real";

console.log(str.ToJadenCase());

//Soluçlão mais utilizada
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}