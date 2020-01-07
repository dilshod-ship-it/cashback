const regularPurchases = 3000000;
//0.01 - magic value (magic constant, hardcoded)
//const cahsback = regularPurchases * 0.01 - так делать не нужно!
const regularPurchasesPercent = 0.01;
let cashback = regularPurchases * regularPurchasesPercent;
const cashbackLimit = 3000;
if (cashback > cashbackLimit)
{ cashback = cashbackLimit; }
console.log(cashback);