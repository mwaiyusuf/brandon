//function atm(){
////    alert("insert your ATM card");
//    for(i=2; i>=0; i--){
//        var pin=prompt("Enter your pin");
//        if(pin==1234){
//            alert("welcome to our system\n 1.Check balance\n 2.Withdrawal\n 3.Deposit\n");
//            var proceed=prompt("Enter the number");
//            balance=2000;
//            if(proceed==1){
//                alert("Your balance is " + balance);
//            }
//            else if(proceed==2){
//                var withdraw=prompt("Enter the amount you want to withdraw");
//                Int bal=balance-withdraw;
//                if(withdraw>=balance){
//                    alert("your amount is insufficient");
//                }
//                else{
//                    alert("you have withdrawn " + withdraw + " and your balance is " + bal);
//                }
//            }
//            else if(proceed==3){
//                var deposit=prompt("enter the amount you want to deposit");
//               Int  dep=deposit+balance;
//                alert("you have deposited " + deposit + " and your balance is " + dep);
//            }
//            break;
//        }
//        else{
//            alert("Sorry, you have " + i + " attempts left");
//        }
//    }
//    
//}
//atm();
var x=prompt("Enter an number");
 parseInt(x);
var y=prompt("Enter a whole number");
parseInt(y);
var z=x+y;