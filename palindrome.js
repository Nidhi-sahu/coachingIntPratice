//--------------string method------------------

/*function palindrome(str)
{
  let palin2 = str.split('').reverse().join('');
if(str == palin2)
{
    console.log('It is palindrome');
}
else{
    console.log('It is not a palindrome');
}
}

palindrome('dad');
*/

//-------------------------for loop method-----------------------------

var newstr='';
function palindrome(str)
{
   
  for( let i=str.lenght-1; i>=0; i--)
  {
    newstr = newstr+ str[i];
  }
  
  if(str == newstr)

 console.log("It is palindrome")
  
else

   console.log("It is not palindorme");



}

palindrome("madam");