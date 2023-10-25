arr1=[1,2,3,4,5,6,7,8,9];

function cusSplice(pos){
    for(let i=this.length-1;i>=0;i--)
    {
        if(i>=pos)
        {
            this[i+1]=this[i]
            if(i==pos)
            {
                this[i]=123;
            }
        }
    }
}
Array.prototype.cusSplice=cusSplice;

console.log(arr1.cusSplice(3));



function customSplice(start, deleteCount, ...itemsToInsert) {
    if (start < 0) {
      start = Math.max(this.length + start, 0); // Handle negative start index
    }
    deleteCount = Math.min(deleteCount, this.length - start);  
    const deleted = [];
    for (let i = 0; i < deleteCount; i++) {
      deleted.push(this[start + i]);    
    }
    for (let i = start; i < this.length - deleteCount; i++) {
      this[i] = this[i + deleteCount];     
    }
    
    this.length = this.length - deleteCount;
  
    const initialLength = this.length;
    for (let i = 0; i < itemsToInsert.length; i++) {
      this[start + i] = itemsToInsert[i];
      this.length++;
    }
    for (let i = initialLength; i < start + itemsToInsert.length; i++) {
      this[i] = deleted.shift();
    }
    return deleted;
  }
  Array.prototype.customSplice = customSplice;
  
  let arr4 = [1, 3, 6, 7, 2, 5, 9, 0, 4, 8];
  arr4.customSplice(1, 2,'e','f');
  console.log(arr4);


