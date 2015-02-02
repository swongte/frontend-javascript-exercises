module.exports.sumNumbers = function(array){
    var sum = 0;
    for(i = 0; i < array.length; i++){
      sum += array[i];
    }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString){
    var array1 = [];
    lCString = inputString.toLowerCase();
    
    if(lCString.search(/,/g) > 0){
        return lCString.split(",");
    }
    else{
        array1.push(lCString);
        return array1;
    }
  
};

module.exports.addIndex = function(array1){
  indexArray = [];
  for(i = 0; i < array1.length; i++){
        indexArray[i] = i + " is " + array1[i];
    }
    
    return indexArray;
  
};
