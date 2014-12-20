module.exports.newArray = function(a,b,c,d){
  return [a,b,c,d];
};


module.exports.firstAndLast = function(array){
  if(array.length < 3){
    return "The array is not long enough.";
  }
  else{
    return [array[0], array[array.length-1]];
  }
  
};