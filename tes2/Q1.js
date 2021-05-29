/*
Side effects of the function are as follows:-

1) Any change inside the function is reflected on the global array

*/



let arr = [1, 2, 3, 4];
function f(arr) {
  let local=[];
  for(let i=0;i<arr.length;i++){
    local[i]=arr[i];
  }
    for (x in local) {
        local[x] = 0;
    }
    return local;
}
console.log(arr);
console.log(f(arr));
console.log(arr);