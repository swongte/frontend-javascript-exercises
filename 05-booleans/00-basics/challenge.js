module.exports.equalStrings = function(stringOne, stringTwo) {
  if (stringOne == stringTwo){
    return true;
  }
  else{
    return false;
  }
};

module.exports.notEqual = function(one, two) {
  if(one === two){
    return false;
  }
  else{
    return true;
  }

};

module.exports.inBetween = function(lower, middle, upper) {
  if(lower < middle && middle < upper){
    return true;
  }
  else{
    return false;
  }
 
};

/*module.exports.outsideRanges = function(number) {
  if((number < 10) || (number > 20) || (number < 42) || (number > 75) || (number < 1) || (number > 6)){
    return true;
  }
  else if(number == 42 || number == 1 || number == 6){
    return false
  }
  else{
    return false;
  }

};*/

module.exports.outsideRanges = function(number) {
  if((number < 10) || (number > 20)){
    return true;
  }
  else if((number < 43) || (number > 75)){
    return true;
  }
  else if((number < 2) || (number > 5)){
    return true;
  }
  else{
    return false;
  }

};

module.exports.nameAndPrice = function(name, price) {
  if((name == "NYTimes" || name == "LATimes") && (price >= 1)){
    return true;
  }
  else{
    return false;
  }

};