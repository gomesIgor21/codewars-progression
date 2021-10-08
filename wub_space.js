//Minha Solução
function mySongDecoder(song){
  return song.split('WUB').filter(function(value){if(value) return value}).join(" ");;
}

var song = "AWUBWUBWUBBWUBWUBWUBC";
var song2 = "AWUBBWUBC";
var song3 = "WUBAWUBBWUBCWUB"

console.log(mySongDecoder(song));
console.log(mySongDecoder(song2));
console.log(mySongDecoder(song3));

//Solução mais usada
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}


