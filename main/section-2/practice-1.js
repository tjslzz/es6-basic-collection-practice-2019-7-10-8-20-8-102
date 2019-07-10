'use strict';

module.exports = function countSameElements(collection) {
  var result = new Array();
  var obj = {key:"a", count:0};
  collection.map((item)=>{
    if(obj.key == item){
      obj.count = obj.count + 1;
    }
    else{
      result.push({key:obj.key,count:obj.count});
      obj.key = item;
      obj.count = 1;
    }
  });
  result.push({key:obj.key,count:obj.count});
  return result;
}
