var number=20;
for(var i=2; i<number; i++)
        {
          if( number%i == 0)
           { var res = console.log(`${number} is not prime number`);
            break;}
        
         else{
            var res =`${number} is a prime number`;
         }
         console.log(res);
        }
       // console.log(res);  