
     let x=5;
    var fact=1;
    if(x == 0 )
    {
         console.log(`the factorail of ${x} is 1`);
    }

    else if(x<0)
    {
        console.log(`the factorial of negative no.is not possible`);
    }
    else{
        for( var i=1; i<=x; i++)
        {
            fact = fact * i;
            
        } 
        console.log(`the factorial of ${x} is ${fact}`);
    }


  //number(5);
