

module.exports = function towelSort (matrix) {
  let myArr = matrix,
      sortedArray = [],
      newArr = [];

  if (myArr == undefined || myArr.length == 0){
    return [];
  }
  for (let i = 0; i < myArr.length; i++){
    if(i == 0 || i % 2 == 0){
      sortedArray[i] = myArr[i].sort(function(a,b){ 
        return a - b;
      });
    } else {
      sortedArray[i] = myArr[i].sort(function(a,b){ 
        return b - a;
      });
    };
  };
  for (let i = 0; i < sortedArray.length; i++){
    newArr = newArr.concat(sortedArray[i]);
  };

      console.log(newArr);
  return newArr;
}
