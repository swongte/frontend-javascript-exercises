module.exports.favoriteNumber = function(favnum, guess){
  if(guess == favnum){
    return "You got it!";
  }
  else if(guess < favnum){
    return "Too low";
  }
  else if(guess > favnum){
    return "Too high";
  }
};

module.exports.checkLock = function(q,r,s,t){
  if(q == 3 || q == 5 || q == 7){
    if(r == 2){
      if(s >= 5 && s <=100){
        if(t < 9 || t > 20){
          return "correct";
        }
        else{
          return "incorrect";
        }
      }
      else{
        return "incorrect";
      }
    }
    else{
      return "incorrect";
    }
  }
  else{
    return "incorrect";
  }
};

module.exports.canIGet = function(item,money){
  if(item == 'MacBook Air' && money >= 999){
    return true;
  }
  else if(item == 'MacBook Pro' && money >= 1299){
    return true;
  }
  else if(item == 'Mac Pro' && money >= 2499){
    return true;
  }
  else if(item == 'Apple Sticker' && money >= 1){
    return true;
  }
  else if (item != 'MacBook Air' || item != 'MacBook Pro' || item != 'Mac Pro' || item != 'Apple Sticker'){
    return false;
  }
  else{
    return false;
  }
  
};