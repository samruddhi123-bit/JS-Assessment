//Given the string "LearnJavaScript", extract the first 10 characters.
//var string = "LearnJavaScript";
//console.log(string.slice(0,10)); 


const names=["James","Jane","Doe","Roni"];

const filterValues = names.filter((element) => {
    console.log(element.length < 4);
    })