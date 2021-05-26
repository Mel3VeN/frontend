export function categoryCounter(arr) {
  const count = {};
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === count[arr[i]]) {
      i += i;
    } else {
      count[arr[i]] = 0;
    }
  }
  for (i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  return count;
}
