//Remove the first element from the array ['Apple', 'Banana', 'Mango'] and print both the removed element and the updated array.

const first = ['Apple', 'Banana', 'Mango'];
const updated = first.shift();
console.log("Updated array:    " + first);
console.log("Removed element:   " + updated);