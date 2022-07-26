/**Addition of Array Using For Loop*/
function sumforloop(arr)
{
    var s=0;
    for (var i = 0; i < arr.length; i++) 
    {
        s = s + arr[i];
    }
    return s;
}

document.write("Sum Of An Array Using For-Loop: "+sumforloop([1,4,5,6,7])+"</br></br>");

/**Addition of Array Using While Loop*/
function sumwhileloop(arr)
{
    var i =0;
    var e=0;
    while(i < arr.length) {
        e = e + arr[i]; 
        i++;
    }
    return e;  
}
document.write("Sum Of An Array Using While-Loop: "+sumwhileloop([1,4,5,8])+"</br></br>");

/**Addition of Array Using Do-While Loop*/
function sumdowhileloop(arr)
{
    var j =0;
    var g=0;
    do{
        g= g+arr[j];
        j++;
    }while(j < arr.length);
}
document.write("Sum Of An Array Using Do-WhileLoop: "+sumdowhileloop([1,2,3,4,5])+"</br></br>");
