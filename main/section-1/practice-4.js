'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let mapA = collectionA.map((item)=>item.key);
  return mapA.filter((item)=>{return objectB['value'].includes(item);});
}
