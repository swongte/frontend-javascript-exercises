conditionalFn = function(count){
      if(count < 10){
        return true;
      }
      else{
        return false;
      }
};
actionFn = function(){};

module.exports.stream = function(conditionalFn,actionFn){

    var i = 0;
    while( i < 10){
        if(conditionalFn(i)){
          actionFn();
        }
        else{
          break;
        }
        i++;
    }
  
  
};

module.exports.sumNumbers = function(array){
  var sum = 0;
  if(array.length === 0){
    return sum;
  }
  else{
    var i = 0;
    while(array[i]){
      sum += array[i];
      i++;
    }
    return sum;
  }
  
};





