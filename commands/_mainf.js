/*CMD
  command: /mainf
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                              

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
let res = Libs.ResourcesLib.userRes("balance");
let id = "@TronUniverseV1Bot"
Bot.sendKeyboard("π’ Balance ~ " + res.value().toFixed(8) + " TRX π’" + "\nβ Deposit,β° Re-Invest,β Withdraw,\nπ Statistics,π Payment Hub,\nπ Bonus,π΅οΈ Refer,π Calculator,\nπ‘ About,π³ Set Wallet,βοΈ Support","*π― New Bot Launched: Tron Universe*\n\n*β’οΈ Status: Instantly Paying*\n\n*π Bot Started: 03/03/2021*\n\n*πClaim Free Bonus Daily*\n\n*π¦ Investment Plan:*\n*π 120% Profit For 24 Hours*\n\n*β Minimum Deposit: 1 TRX*\n*β Minimum Withdraw: 1 TRX*\n*β° Minimum Reinvest: 1 TRX*\n*π« Withdrawal Fees: 0.2 TRX*\n*β  Instant Withdrawal/Auto*\n*π΅οΈ Ref Bonus: 5%*\n\n*β Deposit TRX*\n\n*β Payment Method: TRX*")
