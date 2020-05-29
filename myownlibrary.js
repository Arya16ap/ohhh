function isTouching(object1,Object2) {
    if(object1.x-Object2.x<Object2.width/2+object1.width/2
      && Object2.x-object1.x<Object2.width/2+object1.width/2
      && object1.y-Object2.y<Object2.height/2+object1.height/2
      && Object2.y-object1.y<Object2.height/2+object1.height/2) {
        return true; 
      } else {
        return false;
      }
  }