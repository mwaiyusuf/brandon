////var x=prompt("Enter your name");
////document.write("hi " + x);
//function sad(){
//    var age=prompt("Enter your age");
//    if(age<10){
//        Document.write("more than " + age + "go to nursery");
//        
//    }
//    else if(age>10){
//        document.write("more than"  + age + "go to primary");
//    }
//    else if(age<15){
//        document.write("more than"  + age + "go to secondary");
//    }
//    else{
//        document.write("more than" + age + "go to university");
//    }
//}
//sad()
function dr(){
    var number=[];
    for(i=0;i<5;i++){
        var num=number.push(prompt("Enter a number"));
    }
    var count=0;
    for(x=0;x<number.length;x++){
        if(number[x]>=0){
            count++;
        }
        
    }
    if(count>=1){
        alert(count);
    }
    else{
        alert("There is no positive number  in presence");
    }
    if(number>=0){
        alert("There is a positive number ");
    }
    else{
        alert("There is no positive number");
    }
    
}
dr();
