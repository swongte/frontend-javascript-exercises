module.exports.copy = function(object1){
  var newObj = {};
    for (var prop in object1) {
        if (object1.hasOwnProperty(prop)) {
         newObj[prop] = object1[prop];
        }
       }
    return newObj;

};

module.exports.extend = function(dest,src){
    for (var prop in src) {
        dest[prop] = src[prop]; 
        
       }
    return dest;
};

module.exports.hasElems = function(obj,array){
    if (array.length === 0){
        return true;
    }
    else {
        var resultArray =[];
        for(i = 0;i < array.length; i++){
            resultArray[i] = obj.hasOwnProperty(array[i]);
        }
            console.log(resultArray);
         
                if(resultArray.indexOf(false) >= 0){
                    return false;
                }
                else{
                    return true;
                }
        
    }
    
};