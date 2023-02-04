//let str="nidhi";
//reverseString(str);
 function reverseString(str)
 {
    let newString ='';
    for(let i=str.length-1; i>=0; i--)
    {
      newString += str[i];
    }
    let str1 = newString.split(" ").reverse().join(" ")
    console.log(str1)
 }

 reverseString("nidhi sahu");

 