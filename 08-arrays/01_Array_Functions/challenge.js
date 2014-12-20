module.exports.reversePlusOne = function(array){
  if(array.length < 2){
    return "The array is not long enough.";
  }
  else{
    array.reverse().unshift(1);
    return array;
  }
};

module.exports.plusesEverywhere = function(array){
  if(array.length < 2){
    return array.replace(array[0].replace("+"));
  }
  else{
    return array.toString().replace(/,/g,"+");
  }
};

module.exports.arrayQuantityPlusOne = undefined;