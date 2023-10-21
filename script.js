var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

//at function
function myAtFunction(i){
return this[i];
}
Array.prototype.myAtFunction=myAtFunction;
console.log('At value:'+arr1.myAtFunction(1));
//every function
function myEvery(fnc) {
    for (var i = 0; i < this.length; i++) {
       if (!(fnc(this[i]))) {
          return false;
          break;
       }   
    }
   return true;
 } 
 function callback(x){
    return x>5;
}
Array.prototype.myEvery=myEvery;
console.log('every method:'+arr1.myEvery(callback));
//concat function 
function myConcat(...val){
    let newArr=[]
    let fl=0
    for(let i=0;i<this.length+val.length;i++)
    {
        if(i<this.length)
        {
            newArr.push(this[i])
        }
        else{
            newArr.push(...val[fl])
            fl++            
        }
    }
    return newArr;
}
Array.prototype.myConcat=myConcat;
console.log("concat Method"+arr1.myConcat(arr2,arr3));
//array filter method  
function customFilter(callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  }
  function callback(x){
        if(x>5){
            return x;
      }
  }
Array.prototype.customFilter=customFilter;



function customMap(callback) {
    const mappedArray = [];
  
    for (let i = 0; i < this.length; i++) {
      mappedArray.push(callback(this[i], i, this));
    }
  
    return mappedArray;
  }
  Array.prototype.customMap=customMap;
 