 /* Problem-1: Write a function that will take seer as input, convert it into mon and return the value as number. Consider that 1 mon = 40 sher 
 
 Input: 120 (in sher)
 Output: 3 (in mon)
 
 */

//Function that convert sher to mon
function seerToMon(mySeer){
    //Input validation or error handling. if the input is not a number or a negative number
    if(typeof(mySeer) != 'number' || mySeer < 0){
        return "WRONG INPUT! Please Input a Positive Number!";
    }
    else{
        let mon = mySeer / 40; //main calculation
        return mon; //return the desired value
    }
}

//validate the result by prinint the output
let myMon = seerToMon(120);
console.log(myMon);




/* Problem-2: Write a function that will take 3 inputs/parameters (shirtQuantity, pantQuantity, shoeQuantity) and returns the totalSalesAmount as number.

Unit Prices:
Shirt: 100 taka
Pant: 200 taka
Shoe: 500 taka 

Input:
shirtQuantity = 7
pantQuantity = 5
shoeQuantity = 2

Output: totalSalesAmount = (shirtUnitPrice * shirtQuantity) + (pantUnitPrice * pantQuantity) + (shoeUnitPrice * shoeQuantity)
*/

//Function to calculate the total sales cost of a shop
function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    //pre-defined unit price
    let shirtUnitPrice = 100;
    let pantUnitPrice = 200;
    let shoeUnitPrice = 500;

    //Input validation or error handling. if there is any input value not a number.
    if(typeof(shirtQuantity) != 'number' || typeof(pantQuantity) != 'number' || typeof(shoeQuantity) != 'number'){
        return "WRONG INPUT! Please input the quantity in NUMBER!";
    }
    else{
        let shirtTotalSales = shirtUnitPrice * shirtQuantity;
        let pantTotalSales = pantUnitPrice * pantQuantity;
        let shoeTotalSales = shoeUnitPrice * shoeQuantity;

        let totalSalesAmount = shirtTotalSales + pantTotalSales + shoeTotalSales;

        return totalSalesAmount;
    }
}

let myTotalSalesAmount = totalSales(3, 4, 1);
console.log(myTotalSalesAmount);




/* Problem-3: Write a funciton that will take the Quantity of T-Shirt and return the totalDeliveryCost as number. The condition is as follows - 

tshirtQuantity <= 100: unitCost = 100
101 <= tshirtQuantity <= 200: unitCost = 80
tshirtQuantity >200: unitCost = 50  

Input: 
tshirtQuantity = 500

Output: totalDeliveryCost (in number)

*/

function deliveryCost(tshirtQuantity){
    if(tshirtQuantity < 0){
        return "WRONG INPUT!"
    }    
    else if(tshirtQuantity > 0 && tshirtQuantity <= 100){
        let totalDeliveryCost = tshirtQuantity * 100;
        return totalDeliveryCost;
    }
    else if(tshirtQuantity > 100 && tshirtQuantity <=200){
        let costForFirstLot = 100 * 100;
        let costForSecondLot = (tshirtQuantity - 100) * 80;
        let totalDeliveryCost = costForFirstLot + costForSecondLot;
        return totalDeliveryCost;
    }
    else{
        let costForFirstLot = 100 * 100;
        let costForSecondLot = (tshirtQuantity - 100) * 80;
        let costForThirdLot = (tshirtQuantity - 200) * 50;
        let totalDeliveryCost = costForFirstLot + costForSecondLot + costForFirstLot;
        return totalDeliveryCost;
    }
    
}

let myTotalDeliveryCost = deliveryCost(250);
console.log(myTotalDeliveryCost);


/* Problem-4: Write a function that will take an array (containing your friends' name) as input and when the function finds the first name with length = 5, then it will return the name as string.

Input: myFriendsName = [sami, farmee, arishamma, arashabba, tasnuva, ozair, hasan, rajib, rasel, rubel]
Output: "ozair" */


//Function to find the first name with length = 5
function perfectFriend(friendsName){
    let perfectName = "SORRY! There is no perfect match found";
    
    //Input validation. if there is any number input in the name array
    for(const name of friendsName){
        if(typeof(name) != 'string'){
            return "WRONG INPUT! Please input all the names as TEXT!";
        }
    }
    
    for(const name of friendsName){
        if(name.length == 5){
            perfectName = name;
            break;
        }
    }
    return perfectName;
}

let myFriendsName = ['sami', 'farmee', 'arishamma', '2', 'tasnuva', 'Ozair Alam', 'rasel', 'ozair', 'shipul'];
let myPerfectFriend = perfectFriend(myFriendsName);
console.log(myPerfectFriend);