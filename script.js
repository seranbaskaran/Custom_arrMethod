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
      if (callbackFilter(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  }
  function callbackFilter(x){
        if(x>5){
            return x;
      }
  }
Array.prototype.customFilter=customFilter;
//custom map function
function customMap(callback) {
    const mappedArray = [];
  
    for (let i = 0; i < this.length; i++) {
      mappedArray.push(callbackMap(this[i], i, this));
    }
  
    return mappedArray;
  }
  function callbackMap(num) {
    return num * 1;
  }
  Array.prototype.customMap=customMap;
  //custom reverse function
  function customReverse() {
    const reversedArray = [];
    for (let i = this.length - 1; i >= 0; i--) {
      reversedArray.push(this[i]);
    }
  
    return reversedArray;
  }
  Array.prototype.customReverse=customReverse;
//custom function for sort
function customSort() {
  const n = this.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (compareFunction(this[i], this[i + 1]) > 0) {
        // Swap arr[i] and arr[i + 1]
        const temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  function compareFunction(a,b){
    return a-b;
  }
  return this;
}
Array.prototype.customSort=customSort;
console.log(arr1.customSort());
//custom function for slice
function customSlice(start, end) {
  if (start === undefined) {
    start = 0;
  } else if (start < 0) {
    start = Math.max(this.length + start, 0);
  }
  if (end === undefined) {
    end = this.length;
  } else if (end < 0) {
    end = Math.max(this.length + end, 0);
  }
  const slicedArray = [];
  for (let i = start; i < end; i++) {
    slicedArray.push(this[i]);
  }
  return slicedArray;
}
Array.prototype.customSlice=customSlice;
//custom reduce function 
function customReduce(reduceCallback,tot)
{
  for(let i=0;i<this.length;i++){
        tot = reduceCallback(tot,this[i])
    }
    return tot;
}
function reduceCallback(total, num) {
  return total - num;
}
Array.prototype.customReduce=customReduce;
//custom function for Array.splice

/* function customSplice(start, deleteCount, ...itemsToInsert) {
  if (start < 0) {
    start = Math.max(this.length + start, 0); 
  }
  deleteCount = Math.min(deleteCount, this.length - start);
  const deleted = [];
  
 
  for (let i = 0; i < deleteCount; i++) {
    deleted.push(this[start + i]);
  }

  const secondpart = this.customSlice(start + deleteCount);


  const itemsToInsertLength = itemsToInsert.length;
  this.length = start + itemsToInsertLength;
  for (let i = 0; i < itemsToInsertLength; i++) {
    this[start + i] = itemsToInsert[i];
  }


  this.push(...secondpart);

  return deleted;
}

Array.prototype.customSplice = customSplice;

let arr4 = [1,2,3,4,5,6,7,8,9];
const deletedItems = arr4.customSplice(1, 2, 'e', 'f','g');
console.log(arr4); 
console.log(deletedItems); */
function customSplice(start, deleteCount) {
  if (start < 0) {
    start = Math.max(this.length + start, 0); // Handle negative start index
  }
  deleteCount = Math.min(deleteCount, this.length - start);
  const deleted = [];
  
  // Step 1: Save the deleted elements
  for (let i = 0; i < deleteCount; i++) {
    deleted.push(this[start + i]);
  }

  const tail = this.slice(start + deleteCount);

  // Step 2: Overwrite the original array with the items to insert
  const itemsToInsert = Array.prototype.slice.call(arguments, 2);
  const itemsToInsertLength = itemsToInsert.length;
  this.length = start + itemsToInsertLength;
  for (let i = 0; i < itemsToInsertLength; i++) {
    this[start + i] = itemsToInsert[i];
  }

  // Step 3: Append the tail back to the array
  for (let i = 0; i < tail.length; i++) {
    this[start + itemsToInsertLength + i] = tail[i];
  }

  this.length = this.length - deleteCount + itemsToInsertLength;

  return deleted;
}

Array.prototype.customSplice = customSplice;

let arr4 = [1,2,3,4,5,6,7,8,9];
const deletedItems = arr4.customSplice(1, 2, 'e', 'f');
console.log(arr4); // Modified array
console.log(deletedItems); // Deleted items
