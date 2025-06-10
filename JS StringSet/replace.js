//In the array ['HTML', 'CSS', 'Python'], replace 'Python' with 'JavaScript'.

let lang = ['HTML', 'CSS', 'Python'];

let index = lang.indexOf('Python');

if (index !== -1) {
  lang.splice(index, 1, 'JavaScript');
}

console.log(lang);
