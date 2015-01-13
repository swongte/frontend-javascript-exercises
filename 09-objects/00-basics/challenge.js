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
  }
  
};

module.exports.formLetter = undefined;

module.exports.canIGet = undefined;