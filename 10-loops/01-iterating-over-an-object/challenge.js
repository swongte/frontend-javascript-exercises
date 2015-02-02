module.exports.getKeys = function(object1){
  var propArray = [];
    for (var property in object1){
        propArray.push(property);
        
    }
    
    return propArray;
};

module.exports.getValues = function(object1){
  var valueArray = [];
    for (var propValue in object1){
      valueArray.push(object1[propValue]);
    }
    return valueArray;
  
};

module.exports.objectToArray = function(object1){
  var objArray = []
    for (var prop in object1){
      objArray.push(prop + " is " + object1[prop]);
    }
    return objArray;
  
};