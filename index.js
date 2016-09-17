function changeCompletely(element, index, array){
  array[index] = "changed";
}
function doToElementsInArray(array, callback){
  array.forEach(callback);
}
