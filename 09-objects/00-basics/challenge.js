module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
  var courseInfo = {};
    courseInfo.title = courseTitle;
    courseInfo.duration = courseDuration;
    courseInfo.students = courseStudents;
  
    return courseInfo;
};

module.exports.addProperty = function(object, newProp, newValue){
  
  if(newProp in object){
    return object;
  }
  else{
    object[newProp] = newValue;
    return object;
  }
  
};

module.exports.formLetter = function(myLetter){
  
  return "Hello " + myLetter.recipient + ",\n\n" + myLetter.msg + "\n\nSincerely,\n" + myLetter.sender;
  
};

module.exports.canIGet = function(item,money){
  itemToBuy = {};
    itemToBuy.name = item;
    itemToBuy.value = money;
    
    appleProduct = {
        'MacBook Air': 999,
        'MacBook Pro': 1299,
        'Mac Pro': 2499,
        'Apple Sticker': 1
    };
    
    return appleProduct.hasOwnProperty(itemToBuy.name) && (itemToBuy.name == 'MacBook Air' && itemToBuy.value >= appleProduct['MacBook Air']) || (itemToBuy.name == 'MacBook Pro' && itemToBuy.value >= appleProduct['MacBook Pro']) || (itemToBuy.name == 'Mac Pro' && itemToBuy.value >= appleProduct['Mac Pro']) || (itemToBuy.name == 'Apple Sticker' && itemToBuy.value >= appleProduct['Apple Sticker']);
  
  
};