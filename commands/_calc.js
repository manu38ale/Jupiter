/*CMD
  command: /calc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*π Profit Calculator π*

Calculate your expected accural after 24 hours!

`Send the amount of TRX you want to invest`
  ANSWER
  keyboard: π«Exit
  aliases: π calculator
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*β You are banned*");
return
}
let amount = parseFloat(data.message);

let daily = amount*1.2;
let profit = amount*1.2;
let dail = amount*2;
let profi = amount*2;

if (amount>= 1 && amount <=999){
Bot.sendMessage(
  "*π» Profit Calculator π»*\n\n_Plan: 120.00% daily for 1 days_\n\n_β± Your first payment will arrive after 24 hours!_\n\n*π° After 24 hours: *" +
    daily.toFixed(1) +
    " TRX\n_β You will get back more than what you invested after just 24 hours_\n\n*π₯ Total Profit: *" +
    profit.toFixed(1) +
    " TRX")
return
}
if (amount>= 1000 && amount <=29999){
Bot.sendMessage(
  "*π» Profit Calculator π»*\n\n_Plan: 200.00% daily for 1 days_\n\n_β± Your first payment will arrive after 24 hours!_\n\n*π° After 24 hours: *" +
    dail.toFixed(1) +
    " TRX\n_β You will get back more than what you invested after just 24 hours_\n\n*π₯ Total Profit: *" +
    profi.toFixed(1) +
    " TRX")
}else{
Bot.runCommand("/mainf")
}

