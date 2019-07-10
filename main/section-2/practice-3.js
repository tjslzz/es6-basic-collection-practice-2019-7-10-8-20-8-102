'use strict';

module.exports = function countSameElements(collection) {
  var result = new Array();
  var obj = {key:"a", count:0};
  collection.map((item)=>{
    if(item.length != 1){
      if(obj.key == item.substring(0,1)){
        obj.count = obj.count + parseInt(item.match(/\d+/g));
      }
      else{
        result.push({name:obj.key,summary:obj.count});
        obj.key = item.substring(0,1);
        obj.count = parseInt(item.match(/\d+/g));
      }
    }
    else{
      if(obj.key == item){
        obj.count = obj.count + 1;
      }
      else{
        result.push({name:obj.key,summary:obj.count});
        obj.key = item;
        obj.count = 1;
      }
    }
  });
  result.push({name:obj.key,summary:obj.count});
  return result;
}
