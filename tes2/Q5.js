function transducer(arr, fFn, mFn) {
  let nArr = arr.filter(fFn);
  nArr = nArr.map(mFn);
  return nArr;
}


//B
function transducer(arr, fFn, mFn) {
  let nArr = [];
  for (x in arr) {
    if (fFn(arr[x])) {
      nArr.push(arr[x]);
    }
  }

  for (x in nArr) {
    nArr[x] = mFn(nArr[x]);
  }
  return nArr;
}