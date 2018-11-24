function atm(){
//    alert("insert your ATM card");
    for(i=2; i>=0; i--){
        var pin=prompt("Enter your pin");
        if(pin==1234){
            alert("welcome to our system\n 1.Check balance\n 2.Withdrawal\n 3.Deposit\n");
            var proceed=prompt("Enter the number");
            balance=2000;
            if(proceed==1){
                alert("")
            }
        }
        else{
            alert("Sorry, you have " + i + " attempts left");
        }
    }
    
}
atm();