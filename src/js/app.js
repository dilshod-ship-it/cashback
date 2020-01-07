//0.01 - magic value (magic constant, hardcoded)
//const cahsback = regularPurchases * 0.01 - так делать не нужно!
const regularPurchases = 100;
const regularPurchasesPercent = 0.01;

const increasePurchases = 100;
const increasePurchasesPercent = 0.05;

const specialPurchases = 100;
const specialPurchasesPercent = 0.3;

let cashback = regularPurchases * regularPurchasesPercent + 
	increasePurchases * increasePurchasesPercent + 
	specialPurchases * specialPurchasesPercent;

const cashbackLimit = 3000;
if (cashback > cashbackLimit)
{ cashback = cashbackLimit; }
console.log(cashback);