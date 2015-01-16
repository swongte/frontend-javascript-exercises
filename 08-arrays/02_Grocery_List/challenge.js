module.exports.addItem = function(item, list){
  if(list.indexOf(item) < 0){
    list.push(item);
      return list;
  }
  else{
      return list;
  }
  
};

module.exports.reverseSortedList = function(array){
  if(array.indexOf(/./g) < 0){
    return array.sort(function(a,b){
        if (b < a) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        // a must be equal to b
            return 0;});
    }
  else{
    return array.sort(function compareNumbers(a, b) {return b - a;});
  }
};