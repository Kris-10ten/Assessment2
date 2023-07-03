///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

// function calcFinalPrice(cartTotal, couponValue, tax) {  //declaration
//     return cartTotal * (1 + tax) - couponValue
// }

// const calcFinalPrice = function(cartTotal, couponValue, tax) { //expression
//     return cartTotal * (1 + tax) - couponValue
// }

const calcFinalPrice = (cartTotal, couponValue, tax) => cartTotal * (1 + tax) - couponValue //arow

console.log(calcFinalPrice(25, 2, .07))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE 

*/

// Name: This property will store the name of the customer. The data type for 
// this property can be a string, because it will contain alphabetic characters. 

// Number: This property will store the phone number of the customer. 
// The data type for this property can be a string, because it will contain numeric 
// characters and possibly special characters like '+' or '-'. Storing it as a string allows 
// for flexibility in formatting.

// Address: This property will store the address of the customer. The data type for this property can be a string, 
// because it will contain a combination of alphabetic characters, numbers, and special characters like ',' 
// or '-'. 

// Order: This property will store the order number of the customer. The data type for this property can be a
// number, because it will only contain numbers.

// Membership: This property will store if the customer has a membership or not. The data type for 
// this property can be a boolean, because it will return true if the customer has a membership and false if 
// the customer does not.

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: 'Phil',
    number: '312-928-0291',
    address: '231 Firefly Ln',
    order: 40129,
    membership: true
}

console.log(customer)