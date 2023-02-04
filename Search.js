let data=[10,20,30,40,50];
let item=50;
let index='';

for( let i=0; i<data.length; i++)
{
    if(data[i]==item)
    {
        index=i;
        break;
    }
}
console.log(index);