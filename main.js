const url = require ("node:url");


const currency = "EUR";
const exact_date = "10.09.2024";

const myUrl = new URL ('https://bank.gov.ua/NBU_ovdp?json');


myUrl.searchParams.set("date", exact_date);
myUrl.searchParams.set("val_code", currency);


// {serch}${type}&date=${exact_date}&val_code=${currency}');

console.log(myUrl.href);

