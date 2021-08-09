/* 
Problem-1:
Write a function that will take seer as input, convert it into mon and return the value as number. Consider that 1 mon = 40 sher 
 
Input: 120 (in sher)
Output: 3 (in mon)
*/

//Problem-1: Function that convert sher to mon
function seerToMon(mySeer){
    //Input validation or error handling. if the input is NOT a NUMBER or a NEGATIVE NUMBER! Weight cannot be Negative!
    if(typeof(mySeer) != 'number' || mySeer < 0){
        return "WRONG INPUT! Please Input a Positive Weight! Negative Weight or Strings are NOT ALLOWED";
    }

    //Main calculation to convert the sher into mon and return the value!
    else{
        let mon = mySeer / 40;
        return mon;
    }
}

//Check the result by prinint the output outside the function
let myMon = seerToMon(0);
console.log(myMon);

// *************************Problem-1 Finished*************************


/*
Problem-2:
Write a function that will take 3 inputs/parameters (shirtQuantity, pantQuantity, shoeQuantity) and returns the totalSalesAmount as number as per following condition-

Unit Prices:
Shirt: 100 taka
Pant: 200 taka
Shoe: 500 taka 

Input:
shirtQuantity = 7
pantQuantity = 5
shoeQuantity = 2

Output: totalSalesAmount = (shirtUnitPrice * shirtQuantity) + (pantUnitPrice * pantQuantity) + (shoeUnitPrice * shoeQuantity)
totalSalesAmount = 2700
*/

//Problem-2: Function to calculate the total sales cost of a shop!
function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    //pre-defined unit price
    const shirtUnitPrice = 100;
    const pantUnitPrice = 200;
    const shoeUnitPrice = 500;

    //Input validation or error handling. if there is any input value is NOT a NUMBER or Fractional Value! Negative number is allowed, because sometimes customers return products!
    if(typeof(shirtQuantity) != 'number' || typeof(pantQuantity) != 'number' || typeof(shoeQuantity) != 'number' || Number.isInteger(shirtQuantity) == false || Number.isInteger(pantQuantity) == false || Number.isInteger(shoeQuantity) == false) {
        return "WRONG INPUT! Please input the quantities as INTEGERs! Shirt, pant or shoe quantity cannot have a FRACTIONAL or STRING value!";
    }

    //Main calculation to calculate the Total Sales Amount of all products!
    else{
        let shirtTotalSales = shirtUnitPrice * shirtQuantity;
        let pantTotalSales = pantUnitPrice * pantQuantity;
        let shoeTotalSales = shoeUnitPrice * shoeQuantity;

        let totalSalesAmount = shirtTotalSales + pantTotalSales + shoeTotalSales;

        //Return the desired value as number!
        return totalSalesAmount;
    }
}

//Check the result by prinint the output outside the function
let myTotalSalesAmount = totalSales(5, '8', 3);
console.log(myTotalSalesAmount);

// *************************Problem-2 Finished*************************


/* 
Problem-3: 
Write a funciton that will take the Quantity of T-Shirt and return the totalDeliveryCost as number. The condition is as follows - 

0 > tshirtQuantity <= 100: unitCost = 100
101 <= tshirtQuantity <= 200: unitCost = 80
tshirtQuantity > 200: unitCost = 50  

Input: 
tshirtQuantity = 500

Output: totalDeliveryCost (in number)

*/

//Problem-3: Function to calculate the total delivery cost based on T-Shirt Quantity! 
function deliveryCost(tshirtQuantity){
    //Input validation! if there is any input value is NOT a NUMBER or Fractional Value!
    if(typeof(tshirtQuantity) != 'number' || tshirtQuantity < 0 || Number.isInteger(tshirtQuantity) == false){
        return "WRONG INPUT! Please input the quantity as a POSITIVE INTEGER! T-Shirt quantity cannot have a FRACTIONAL value, or NEGATIVE value, or STRING!";
    }
    
    //Total Delivery Cost if the T-Shirt Quanity is 0 to 100!
    else if(tshirtQuantity >= 0 && tshirtQuantity <= 100){
        let totalDeliveryCost = tshirtQuantity * 100;
        return totalDeliveryCost;
    }

    //Total Delivery Cost if the T-Shirt Quanity is 100 to 200!
    else if(tshirtQuantity > 100 && tshirtQuantity <=200){
        let costForFirstLot = 100 * 100;
        let costForSecondLot = (tshirtQuantity - 100) * 80;
        let totalDeliveryCost = costForFirstLot + costForSecondLot;
        return totalDeliveryCost;
    }

    //Total Delivery Cost if the T-Shirt Quanity is more than 200!
    else{
        let costForFirstLot = 100 * 100;
        let costForSecondLot = 100 * 80;
        let costForThirdLot = (tshirtQuantity - 200) * 50;
        let totalDeliveryCost = costForFirstLot + costForSecondLot + costForThirdLot;
        return totalDeliveryCost;
    }
    
}

//Check the result by prinint the output outside the function!
let myTotalDeliveryCost = deliveryCost(160);
console.log(myTotalDeliveryCost);


// *************************Problem-3 Finished*************************



/* 
Problem-4: 
Write a function that will take an array (containing your friends' name) as input and when the function finds the first name with length = 5, then it will return the name as string and stop searching other items in array.

Input: myFriendsName = ['sami', 'farmee', 'arishamma', 'arashabba', 'tasnuva', 'OzairAlam', 'rasel', 'ozair', 'shipul']
Output: "ozair"
*/


//Problem-4: Function to find the first name in an array with exact length = 5!
function perfectFriend(friendsNameArr){
    //define the variable to return the first perfect name. If there is no perfect match (name length = 5) found in the array, it will retrun the string "SORRY! There is NO NAME with exact lenght = 5!" 
    let perfectName = "SORRY! There is NO NAME with exact lenght = 5!";
    
    //Input validation. If the funtion parameter contains something other than an Array!
    if(Array.isArray(friendsNameArr) == false){
        return "WRONG INPUT! Please input an ARRAY!";
    }

    else{
        //Input validation. If the array items contains anything other than string!
        for(const name of friendsNameArr){
            if(typeof(name) != 'string'){
                return "WRONG INPUT! NO NUMBER ALLOWED! Please input all the names as STRING!";
            }
        }
    
        //Core calculation. This block of code finds the first name with exact length = 5, and return the name as STRING!
        for(const name of friendsNameArr){
            if(name.length == 5){
                perfectName = name;
                break;
            }
        }
        //return the required value as string
        return perfectName;
    }
    
}

//Declare an array containing my friends' name!
let myFriendsName = ['sami', 'Farmee', 'Arishamma', 'Arashabba', 'tasnuva', 'Ozair Alam', 'Rasel', 'Hasan', 'Hussain Rubel', 'Rajib', 'Shipul', 'Wahid'];
let myPerfectFriend = perfectFriend(myFriendsName);

//Check the result by prinint the output outside the function!
console.log(myPerfectFriend);

// *************************Problem-4 Finished*************************