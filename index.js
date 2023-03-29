
var customerName = "bob";

function getCustomerName (  )
{
    return customerName ;
}
function upperCaseCustomerName()
{
    customerName = customerName.toUpperCase();
    
    return customerName ;
}


var bestCustomer ;

function setBestCustomer (  ) {
    bestCustomer = "not bob" ;
    return bestCustomer ;
}

function overwriteBestCustomer()
{
    bestCustomer = "maybe bob" ;
    return bestCustomer ;
}

const leastFavoriteCustomer = "something" ;
function  changeLeastFavoriteCustomer()
{
    leastFavoriteCustomer = "Hi" ;
}