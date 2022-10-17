var a=[4,8,3,0,7,9,5,1,-45];
var t;
for(let i=1;i<a.length;i++)
{
    let j=i;
    while( a[j-1]<a[j])
    {
        t=a[j];
        a[j]=a[j-1];
        a[j-1]=t;
        j--;
    }
}
console.log(a);